import { Outlet,Link} from "react-router-dom";
import { Suspense } from "react";

export const SharedLayout=()=>{
    return(
        <div>
      <header>
     <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
    )
}