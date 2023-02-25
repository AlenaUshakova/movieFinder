import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { movieById, getMovieVideo } from '../../components/services/api-movie';
import { BackLink } from 'components/BackLink/BackLink';
import {
  WrapperMovie,
  MovieList,
  MovieLink,
  MovieInfo,
  MovieInfoTitle,
  ContainerMovie,
  MovieDetText,
  MovieTrailer,
} from './MovieDetails.styled';
import noposter from '../../images/NoPoster.jpg';
import { Modal } from 'components/Modal/Modal';
import ReactPlayer from 'react-player';
import { Button } from 'components/Button/Button';
import { RxVideo } from 'react-icons/rx';
import { useContext } from 'react';
import { languageContext } from 'context/LanguageContext';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [movieId, setMovieId] = useState(null);
  const [movieVideo, setMovieVideo] = useState('');
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const { value } = useContext(languageContext);

  useEffect(() => {
    movieById(id, value).then(r => {
      if (r.overview === '') {
        movieById(id, 'en').then(setMovieId);
      }
      setMovieId(r);

      getMovieVideo(id).then(r => {
        if (r.length === 0) {
          setMovieVideo(r);
          return;
        }
        const key = r.find(
          el =>
            el.name === 'official trailer' ||
            el.name === 'Official Trailer' ||
            el.name.includes('Official') ||
            el.name[0]
        );
        setMovieVideo(key.key);
      });
    });
  }, [id, value]);

  if (!movieId) {
    return;
  }

  const {
    poster_path,
    original_title,
    original_name,
    release_date,
    first_air_date,
    vote_average,
    genres,
    overview,
  } = movieId;

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };
  return (
    <ContainerMovie>
      <BackLink to={backLinkHref}>
        {value === 'ru' ? 'Назад' : 'Go back'}
      </BackLink>
      <WrapperMovie>
        {poster_path !== null ? (
          <img src={`${BASE_URL}${poster_path}`} alt="" />
        ) : (
          <img src={noposter} alt="" width={334} />
        )}
        <MovieDetText>
          <h1>
            {original_title || original_name} (
            {release_date === '' ? (
              <span>
                {value === 'ru' ? 'нет информации' : 'no information'}
              </span>
            ) : (
              <span>{parseInt(release_date || first_air_date)}</span>
            )}
            )
          </h1>
          <p>
            {value === 'ru' ? 'Рейтинг пользователей: ' : 'User Score:'}
            {`${Math.round(vote_average * 10)}%`}
          </p>
          <h3>{value === 'ru' ? 'Описание ' : 'Overview'}</h3>
          <p>
            {overview !== ''
              ? overview
              : value === 'ru'
              ? 'нет информации'
              : 'no information'}
          </p>
          <h3>{value === 'ru' ? 'Жанры' : 'Genres'}</h3>
          <p>
            {genres.length <= 0
              ? value === 'ru'
                ? 'нет информации'
                : 'no information'
              : genres.map((genre, index) => (
                  <span key={index} style={{ marginRight: '10px' }}>
                    {
                      (genre.name =
                        genre.name[0].toUpperCase() +
                        genre.name.slice(1, genre.name.length))
                    }
                    /
                  </span>
                ))}
          </p>
          {movieVideo.length > 0 && (
            <MovieTrailer>
              <Button onClick={toggleModal}>
                {' '}
                <RxVideo size={20} style={{ marginRight: '10px' }} /> Trailer
              </Button>
            </MovieTrailer>
          )}
        </MovieDetText>
      </WrapperMovie>

      <MovieInfo>
        <MovieInfoTitle>
          {value === 'ru'
            ? 'Допольнительная информация'
            : 'Additional Information'}
        </MovieInfoTitle>
        <MovieList>
          <li>
            <MovieLink to="cast" state={location.state}>
              {value === 'ru' ? 'Актёрский состав ' : 'Cast'}
            </MovieLink>
          </li>
          <li>
            <MovieLink to="reviews" state={location.state}>
              {value === 'ru' ? 'Отзывы' : 'Reviews'}
            </MovieLink>
          </li>
        </MovieList>
      </MovieInfo>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      {showModal && (
        <Modal closeModal={toggleModal}>
          <ReactPlayer
            muted={true}
            controls={true}
            width="100%"
            height="100%"
            url={`https://www.youtube.com/watch?v=${movieVideo}`}
          />
        </Modal>
      )}
    </ContainerMovie>
  );
};

export default MovieDetails;
