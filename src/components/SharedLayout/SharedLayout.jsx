import { Outlet,NavLink} from "react-router-dom";
import { Suspense } from "react";
import {Header,Nav} from './SharedLayout.styled';
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: black;
text-decoration:none;
font-weight: 900;
font-size:30px;
  &.active {
    color:red;
  }
`;

export const SharedLayout=()=>{
    return(
        <div>
      <Header>
     <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
          </Nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
    )
}