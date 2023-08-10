import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

export const HomeItem = ({ title,name, id }) => {
    
  const location = useLocation();

    return (
      <li>
     <Link to={`/movies/${id}`} state={{ from: location }}>
       {title??name}
        </Link>
      </li>
    );
  };

 HomeItem.propTypes = {
   title: PropTypes.string,
    id: PropTypes.number.isRequired,
    name:PropTypes.string,
  };
  