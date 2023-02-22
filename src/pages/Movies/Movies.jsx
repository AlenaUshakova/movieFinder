import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import {
  genresMovies,
  movieByQuery,
} from '../../components/services/api-movie';
import { FilmList } from 'components/FilmList/FilmList';
import { MovieMain } from './Movies.styled';
import { Button } from '../../components/Button/Button';
import { NoResults } from 'components/NoResults/NoResults';
import { NoSearch } from 'components/NoSearch/NoSearch';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { languageContext } from 'context/LanguageContext';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [ganre, setGanre] = useState([]);
  const [page, setPage] = useState(1);
  const [total_results, setTotalResults] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const { value } = useContext(languageContext);

  const formSubmit = inputQuery => {
    if (inputQuery === query) {
      return toast.error(
        value === 'ru'
          ? `Вы уже смотрите результаты поиска по '${inputQuery}'`
          : `You're currently viewing search results by '${inputQuery}'`
      );
    }
    if (inputQuery === '') {
      return toast.error(
        value === 'ru'
          ? 'Вы ничего не ввели для поиска'
          : 'You did not enter anything to search'
      );
    }

    setPage(1);
    setMovies([]);
    setSearchParams(inputQuery !== '' ? { query: inputQuery } : {});
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    genresMovies(value).then(r => {
      if (value === 'ru') {
        const ruGenre = r.map(el => {
          const obj = {};
          obj.id = el.id;
          obj.name =
            el.name[0].toUpperCase() + el.name.slice(1, el.name.length);

          return obj;
        });

        setGanre(ruGenre);
      } else {
        setGanre(r);
      }
    });

    movieByQuery(query, page, value).then(r => {
      setMovies(prevMovie => [...prevMovie, ...r.results]);
      setTotalResults(r.total_results);
    });
  }, [query, page, value]);

  if (!movies) {
    return;
  }
  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <MovieMain>
      <SearchBox onSubmit={formSubmit} />
      {total_results === 0 && <NoResults value={value} query={query} />}
      {query === '' && total_results !== 0 && <NoSearch value={value} />}
      {query && <FilmList movies={movies} ganre={ganre} />}
      {total_results / 12 >= page && query !== '' && (
        <Button onClick={loadMore}>
          {value === 'ru' ? 'Показать еще' : 'Load more'}
        </Button>
      )}
    </MovieMain>
  );
};

export default Movies;
