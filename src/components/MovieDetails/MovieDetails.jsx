import { useParams,useLocation,useNavigate,Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { responses } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieData = async () => {
      try {
        setIsLoading(true);
        const movieDetails = await responses.fetchMovieById(movieId);
        setMovieData(movieDetails);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieData();
  }, [movieId]);
const location=useLocation();
const navigate=useNavigate();
  const handleGoBack=()=>{
if(location.state){
    navigate(location.state.from)
    return;
}
navigate ('/')
  };

  return (
    <div>
        <button onClick={handleGoBack}>◀◀ Go back</button>
        
      {movieData !== null &&
      <img src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} alt={movieData.title}
      width="376px" height="565px" loading="lazy" />}
      {movieData !== null && 
        <div>
          <h2>{movieData.title}</h2>
          <p>
            User Score: {((movieData.vote_average * 1000) / 100).toFixed()}%
          </p>
          <h3>Overview</h3>
          <p>{movieData.overview}</p>
          <h3>Genres</h3>
          <p>
            {movieData.genres?.length > 0
              ? movieData.genres?.map(({ name }) =>
                  name.replace(/([A-Z])/g, ' $1'))
              : 'No results of genres'}
          </p>
        </div>}
<Link to="cast">Cast</Link>
<Link to="reviews">Reviews</Link>
    </div>
  );
};

export default MovieDetails;
