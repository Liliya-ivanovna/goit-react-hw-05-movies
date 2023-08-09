
//import { Container, CardWrapper, ProductName } from "./ProductList.styled";
import PropTypes from 'prop-types';
import { HomeItem } from 'components/HomeItem/HomeItem';
import { Loader } from 'components/Loader/Loader';

export const FilmList = ({movies=[], isLoading=false,error=''}) => {
  const showLoader = isLoading;
  const isVisible = movies?.length > 0;
  const showError = !!error;
  return (<>
    <ul>
      {isVisible&& movies.map(movie => 
        <HomeItem key={movie.id} {...movie}/> ) }   
</ul>
    {showError && <p>{error.message}</p>}
    {showLoader && <Loader />}
    </>
  );
};

FilmList.propTypes={
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
  )
}

