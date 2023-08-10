import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { responses } from 'services/api';
import { useFetchMovies } from 'hooks/fetchApi';
import PropTypes from 'prop-types';
import { NoPoster } from 'components/MovieDetails/MovieDetails.styled';

export const Cast = () => {
  
  const { movieId } = useParams();
  const { data, isLoading, error, fetchApi } = useFetchMovies();
  
  useEffect(() => {
    if (!movieId) return;
    fetchApi(responses.fetchMovieByCast(movieId));
  }, [fetchApi, movieId]);
  const dataCast = data?.cast;
 
  return (
    <div>
      {error && <p>{error.message}</p>}
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}
      {!!dataCast && !isLoading && dataCast.length > 0 ? (
        <ul>
          {dataCast.map(cast => (
            <li key={cast.id}>
             <img
                src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                alt={cast.name}
              />
              <p>{cast.name}</p>
              <p>Character: {cast.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h4>We don't have any cast of this movie 🤔</h4>
      )}
    </div>
  );
};

Cast.propTypes = {
  dataCast: PropTypes.shape({
    character: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
  }),
  isLoading: PropTypes.func,
  error: PropTypes.func,
  fetchApi: PropTypes.func,
};
