import React from "react";
import { NavLink } from "react-router-dom";
import { FilmList } from "components/HomeList/HomeList";
import getMovieById from "services/api";

const Home=()=>{
    return <main>
  <FilmList />
  </main>
};

export default Home;