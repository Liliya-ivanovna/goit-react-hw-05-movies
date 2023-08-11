import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { responses } from 'services/api';
import { useFetchMovies } from 'hooks/fetchApi';
import PropTypes from 'prop-types';
import {Ul} from './Reviews.styled'

export const Reviews = () => {
  const { movieId } = useParams();
  const { data, isLoading,fetchApi } = useFetchMovies();

  useEffect(() => {
    if (!movieId) return;
    fetchApi(responses.fetchMovieByReviews(movieId));
  }, [fetchApi, movieId]);
  const dataResults = data?.results;

  return (
    <>
      {!!dataResults && !isLoading && dataResults.length > 0 ? (
        <Ul>
          {dataResults.map(result => (
            <li key={result.id}>
              <h3>Author: {result.author}</h3>
              <p>{result.content}</p>
            </li>
          ))}
        </Ul>
      ) : 
        <h2>We don't have any reviews of this movie 🤔</h2>
      }
    </>
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
