import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { responses } from 'services/api';
import { useFetchMovies } from 'hooks/fetchApi';
import PropTypes from 'prop-types';

export const Reviews = () => {
  const { movieId } = useParams();
  const { data, isLoading, error, fetchApi } = useFetchMovies();

  useEffect(() => {
    if (!movieId) return;
    fetchApi(responses.fetchMovieByReviews(movieId));
  }, [fetchApi, movieId]);
  const dataResults = data?.results;

  return (
    <div>
      {error && <p>{error.message}</p>}
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}
      {!!dataResults && !isLoading && dataResults.length > 0 ? (
        <ul>
          {dataResults.map(result => (
            <li key={result.id}>
              <h4>Author: {result.author}</h4>
              <p>{result.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h4>We don't have any reviews of this movie 🤔</h4>
      )}
    </div>
  );
};

Reviews.propTypes = {
  dataResults: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
  isLoading: PropTypes.func,
  error: PropTypes.func,
  fetchApi: PropTypes.func,
};
