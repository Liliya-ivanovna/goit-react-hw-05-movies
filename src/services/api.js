

export const responses = {
  async fetchPopularMovies ()  {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${'3073a492602eee53f225e37916e4cfb6'}`
    );
    return await response.json();
  },
  async fetchMovieById (movieId)  {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${'3073a492602eee53f225e37916e4cfb6'}&language=en-US`
    );
    return await response.json();
  },
  async fetchMovieBySearch (searchQuery)  {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${'3073a492602eee53f225e37916e4cfb6'}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
    );
    return await response.json();
  },
  async fetchMovieByCast (movieId)  {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${'3073a492602eee53f225e37916e4cfb6'}&language=en-US`
    );
    return await response.json();
  },
  async fetchMovieByReviews (movieId)  {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${'3073a492602eee53f225e37916e4cfb6'}&language=en-US&page=1`
    );
    return await response.json();
  },
}

