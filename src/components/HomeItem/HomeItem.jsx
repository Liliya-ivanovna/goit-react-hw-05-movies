import { Link, useLocation } from "react-router-dom";


export const HomeItem = ({ title, id }) => {
    const location = useLocation();

   return (
      <li>
     <Link to={`/movies/${id}`} state={{ from: location }}>
       {title}
        </Link>
      </li>
    );
  };

 