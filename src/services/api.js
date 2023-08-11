const API_KEY='3073a492602eee53f225e37916e4cfb6';
const BASE_URL='https://api.themoviedb.org/3';

export const responses = {
  async fetchPopularMovies ()  {
    const response = await fetch(
      `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
    );
    return await response.json();
  },
  async fetchMovieById (movieId)  {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return await response.json();
  },
  async fetchMovieBySearch (searchQuery)  {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
    );
    return await response.json();
  },
  async fetchMovieByCast (movieId)  {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return await response.json();
  },
  async fetchMovieByReviews (movieId)  {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return await response.json();
  },
}

