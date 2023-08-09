import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { responses } from 'services/api';
import { FilmList } from 'components/HomeList/HomeList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useFetchMovies } from 'hooks/fetchApi';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery') ?? '';
  const { isLoading, data, error, fetchApi } = useFetchMovies();

  useEffect(() => {
    if (!searchQuery) return;
    fetchApi(responses.fetchMovieBySearch(searchQuery));
  }, [fetchApi, searchQuery]);

  const movies = data?.results;

  const handleSubmit = searchQuery => {
    setSearchParams({ searchQuery: searchQuery });
  };

  return (
    <main>
      <SearchBar onSubmit={handleSubmit} />
      <FilmList error={error} isLoading={isLoading} movies={movies} />
    </main>
  );
};

export default Movies;
