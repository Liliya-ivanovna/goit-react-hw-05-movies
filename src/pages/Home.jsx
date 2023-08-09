import { FilmList } from 'components/HomeList/HomeList';

import { useFetchMovies } from 'hooks/fetchApi';
import { responses } from 'services/api';

import { useEffect } from 'react';

const Home = () => {
  const { isLoading, data, error, fetchApi } = useFetchMovies();
  useEffect(() => {
    fetchApi(responses.fetchPopularMovies());
  }, [fetchApi]);
  const movies = data?.results;
  const notEmpty = movies && data?.results.length > 0;
  return (
    <>
      <h2>Trending today</h2>
      {notEmpty&& !error && <FilmList movies={movies} isLoading={isLoading}/>}
    </>
  );
};

export default Home;
