import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;
const KEY = 'd9a5502e7ecfc2f8fab8d65f4cbb6057';

export const genresMovies = async(ln) => {
  const response = await axios.get(
    `/genre/movie/list?api_key=${KEY}&language=${ln}`
  );

  return response.data.genres;
};

export const popularMovies = async (page,ln) => {
  const response = await axios.get(
    `trending/movie/week?api_key=${KEY}&page=${page}&language=${ln}`
  );

  return response.data;
};

export const movieByQuery = async (query, page,ln) => {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&query=${query}&language=${ln}&${page}&include_adult=false`
  );

  return response.data;
};

export const movieById = async (id,ln) => {
  const response = await axios.get(`movie/${id}?api_key=${KEY}&language=${ln}`);

  return response.data;
};

export const movieCast = async (id, ln) => {
  const response = await axios.get(
    `movie/${id}/credits?api_key=${KEY}&language=${ln}`
  );
  return response.data.cast;
};

export const movieReviews = async (id, ln) => {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${KEY}&language=${ln}&page=1`
  );
  return response.data.results;
};

export const getMovieVideo = async (id) => {
  const response = await axios.get(`movie/${id}/videos?api_key=${KEY}`);
  return response.data.results;
};

