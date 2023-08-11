import PropTypes from 'prop-types';
import { HomeItem } from 'components/HomeItem/HomeItem';
import {Ul} from './HomeList.styled';
export const FilmList = ({ movies = []}) => {
  const isVisible = Array.isArray(movies) && movies?.length > 0;

  return (
    <>
      <Ul>
        {isVisible &&
          movies.map(movie => <HomeItem key={movie.id} {...movie} />)}
      </Ul>
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
