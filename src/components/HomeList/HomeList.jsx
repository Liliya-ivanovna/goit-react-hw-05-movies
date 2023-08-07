
//import { Container, CardWrapper, ProductName } from "./ProductList.styled";
import PropTypes from 'prop-types';
import { HomeItem } from 'components/HomeItem/HomeItem';

export const FilmList = ({ results }) => {
  return (
    <ul>
      {results.map(result => (
        <HomeItem key={result.id} result={result}>
 </HomeItem>
      ))}
    </ul>
  );
};

FilmList.propTypes={
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
  )
}