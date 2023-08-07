import { Link, useLocation } from "react-router-dom";
//import getMovieById from "services/api";
export const HomeItem = ({result}) => {
    const location = useLocation();
    const { poster_path } = result;
    const imgSrc = poster_path
      ? `https://image.tmdb.org/t/p/w500${poster_path}`
      : '';
  
    const title = result.title ?? result.name;
  
    return (
      <li>
        <Link to={`/movies/${result.id}`} state={{ from: location }}>
          <div>
            {
              <img src={imgSrc} alt={title} loading="lazy" />
            }
          </div>
          <h2>{title}</h2>
        </Link>
      </li>
    );
  };
  