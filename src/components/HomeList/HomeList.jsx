import PropTypes from 'prop-types';
import { HomeItem } from 'components/HomeItem/HomeItem';
import { Loader } from 'components/Loader/Loader';

export const FilmList = ({ movies = [], isLoading = false, error = '' }) => {
  const isVisible = Array.isArray(movies) && movies?.length > 0;

  return (
    <>
      <ul>
        {isVisible &&
          movies.map(movie => <HomeItem key={movie.id} {...movie} />)}
      </ul>
      {!!error && <p>{error.message}</p>}
      {isLoading && <Loader />}
    </>
  );
};

FilmList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    }).isRequired
  ),
};
