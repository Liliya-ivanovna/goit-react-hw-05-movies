import {
  useParams,
  useLocation,
  useNavigate,
  NavLink,
  Outlet,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { responses } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { NoPoster,Wrapper,Button,Flex,Div,Container } from './MovieDetails.styled';
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: black;
 text-decoration:none;
 font-weight: 900;
font-size:20px;
  &.active {
    color: red;
  }
`;
const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

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
  
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    if (location.state) {
      navigate(location.state.from);
      return;
    }
    navigate('/');
  };
  
  const imgSrc = movieData?.poster_path
    ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
    : '';

  return (
    <Container>
       <Flex>
      <Wrapper>
      <Button onClick={handleGoBack}>◀◀ Go back</Button>
      {error && <p>{error.message}</p>}
      {isLoading && <Loader />}
      {imgSrc ? 
        <img src={imgSrc} alt={movieData?.title} width="400px" height="600px"loading="lazy" />
       : <NoPoster/>}
          </Wrapper>
      {movieData !== null && (
        <Wrapper>
       <h1>{movieData.title}</h1>
          <p>
            User Score: {!movieData.vote_average? "0":((movieData.vote_average * 1000) / 100).toFixed()}%
          </p>
          <h2>Overview</h2>
          <p>{movieData.overview}</p>
          <h2>Genres</h2>
          <p>
            {movieData.genres?.length > 0
              ? movieData.genres?.map(({ name }) =>
                  name.replace(/([A-Z])/g, ' $1')
                )
              : 'No results of genres'}
          </p>
          </Wrapper>)} 
           </Flex>
           <Div>
      <StyledLink to="cast">Cast 👈</StyledLink>
      <StyledLink to="reviews">Reviews 👈</StyledLink>
      </Div>
      <Outlet />
    </Container>
  );
};

export default MovieDetails;
