import { Outlet,Link, NavLink } from "react-router-dom";

export const SharedLayout=()=>{
    return(
        <div>
      <header>
        <NavLink>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Outlet/>
        </NavLink>
      </header>
      <Outlet />
    </div>
    )
}