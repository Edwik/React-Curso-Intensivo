import React from "react";
import { Pane } from "evergreen-ui";
import styled from "styled-components";

const StyledNavbar = styled(Pane)`
  display: flex;
  flex-flow: row wrap;
`;

const StyledItemNavbar = styled(Pane)`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  padding: 1rem;
`;

function Navbar() {
  return (
    <StyledNavbar>
      <StyledItemNavbar>Movies</StyledItemNavbar>
      <StyledItemNavbar>TV series</StyledItemNavbar>
      <StyledItemNavbar>Channel</StyledItemNavbar>
      <StyledItemNavbar>Settings</StyledItemNavbar>
    </StyledNavbar>
  );
}

export default Navbar;
