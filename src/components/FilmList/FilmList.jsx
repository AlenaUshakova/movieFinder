import { MovieList, MovieGanre, MovieTitle } from './FilmList.styled';
import { Link, useLocation } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import noposter from '../../images/NoPoster.jpg';
import { nanoid } from 'nanoid';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const FilmList = ({ movies, ganre }) => {
  const location = useLocation();

  const filterGenre = value => {
    return value
      .map(it => {
        if (ganre.length > 0) {
          const filterGenres = ganre.find(el => el.id === it).name;
          return filterGenres;
        }
      return null
      })
      .join(', ');
  };

  return (
    <MovieList>
      {movies.map(movie => (
        <li key={nanoid()}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.poster_path !== null ? (
              <img src={`${BASE_URL}${movie.poster_path}`} alt="" width="200" />
            ) : (
              <img src={noposter} alt="" width="200" />
            )}
          </Link>
          <MovieTitle id={movie.id}>{movie.original_title}</MovieTitle>
          {movie.original_title.length > 30 && (
            <Tooltip
              anchorId={movie.id}
              content={movie.original_title}
              place="bottom"
              noArrow="true"
              style={{
                backgroundColor: '#e2954d',
                color: 'black',
                fontSize: '12px',
              }}
            />
          )}
          <MovieGanre id={movie.genre_ids}>
            {movie.genre_ids.length <= 0 ? (
              <span style={{ color: 'red' }}>No genre</span>
            ) : (
              filterGenre(movie.genre_ids)
            )}
            {filterGenre(movie.genre_ids).length >= 29 && (
              <Tooltip
                anchorId={movie.genre_ids}
                content={filterGenre(movie.genre_ids)}
                place="bottom"
                noArrow="true"
                style={{
                  backgroundColor: '#e2954d',
                  color: 'black',
                }}
              />
            )}
          </MovieGanre>
        </li>
      ))}
    </MovieList>
  );
};

