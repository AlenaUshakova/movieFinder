import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import useLocalStorage from '../../Hooks/useLocalStorage';
const LS_KEY = 'saveln';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const Cast = lazy(() => import('../Cast/Cast'));

export const App = () => {
  const [selectedOption, setSelectedOption] = useLocalStorage('saveln', {
    value: 'en',
    label: 'EN',
  });
  const options = [
    { value: 'en', label: 'EN' },
    { value: 'ru', label: 'RU' },
  ];
  const { value } = selectedOption;

  useEffect(() => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(selectedOption));
  }, [selectedOption]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <SharedLayout
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              options={options}
              value={value}
            />
          }
        >
          <Route index element={<Home value={value} />} />
          <Route path="/movies" element={<Movies value={value} />} />
          <Route path="/movies/:id" element={<MovieDetails value={value} />}>
            <Route path="cast" element={<Cast value={value} />} />
            <Route path="reviews" element={<Reviews value={value} />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
