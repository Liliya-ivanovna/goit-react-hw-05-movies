
//import { NavLink,Outlet ,useSearchParams} from "react-router-dom";
//import getMovieById from "services/api";
import { FilmList } from "components/HomeList/HomeList";
import { SearchBar } from "components/SearchBar/SearchBar";

const Movies=()=>{
  //const movies = getMovieById();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const movieName = searchParams.get("title") ?? "";

  // const visibleMovies = movies.filter((movie) =>
  //   movie.title.toLowerCase().includes(movieName.toLowerCase())
  // );

  // const updateQueryString = (title) => {
  //   const nextParams = title !== "" ? { title } : {};
  //   setSearchParams(nextParams);
  // };
     return <main>
   <FilmList/>
  <SearchBar />
  </main>
};

export default Movies;