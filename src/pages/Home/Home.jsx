import { useEffect, useState } from 'react';
import { HomeTitle, HomeMain } from './Home.styled';
import { FilmList } from 'components/FilmList/FilmList';
import {
  genresMovies,
  popularMovies,
} from '../../components/services/api-movie';
import { Button } from '../../components/Button/Button';
import { useContext } from 'react';
import { languageContext } from 'context/LanguageContext';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [ganre, setGanre] = useState([]);
  const [page, setPage] = useState(1);
  const [total_results, setTotalResults] = useState(null);
  const { value } = useContext(languageContext);

  useEffect(() => {
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
    popularMovies(page, value).then(r => {
      setMovies(prevMovie => [...prevMovie, ...r.results]);
      setTotalResults(r.total_results);
    });
  }, [page, value]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <HomeMain>
      {value === 'en' ? (
        <HomeTitle>Trending today </HomeTitle>
      ) : (
        <HomeTitle>Популярные фильмы </HomeTitle>
      )}

      <FilmList movies={movies} ganre={ganre} />
      {total_results / 12 >= page && (
        <Button onClick={loadMore}>
          {value === 'ru' ? 'Показать еще' : 'Load more'}
        </Button>
      )}
    </HomeMain>
  );
};

export default Home;
