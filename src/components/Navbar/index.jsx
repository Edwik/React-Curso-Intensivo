import React from "react";
import { Pane } from "evergreen-ui";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled(Pane)`
  display: flex;
  flex-flow: row wrap;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  padding: 1rem;
  text-decoration: none;
`;

function Navbar() {
  return (
    <StyledNavbar>
      <StyledLink to="/home">Movies</StyledLink>
      <StyledLink to="/details">TV series</StyledLink>
      <StyledLink to="/details">Channel</StyledLink>
      <StyledLink to="/details">Settings</StyledLink>
    </StyledNavbar>
  );
}

export default Navbar;
