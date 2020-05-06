import React, { useState } from "react";
import { Pane } from "evergreen-ui";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SearchButton from "./../SearchButton";
import "./styles.scss";

const StyledNavbar = styled(Pane)`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
`;

const ToggleButton = styled.a`
  color: #fff;
  padding: 0.5rem;
  border-radius: 50%;
  width: 0.9375rem;
  text-decoration: none;
  &:active {
    background-color: rgba(255, 255, 255, 0.2);
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const LinksContainer = styled(Pane)`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-transform: uppercase;
  padding: 0.5rem;
  text-decoration: none;
  &:active,
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  @media (min-width: 768px) {
    padding: 1rem;
    letter-spacing: 0.1875rem;
    font-size: 1.25rem;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const classContainer = isOpen ? "expanded" : "collapsed";
  return (
    <StyledNavbar>
      <ToggleButton href="#" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </ToggleButton>
      <LinksContainer className={classContainer}>
        <StyledNavLink to="/home">Movies</StyledNavLink>
        <StyledNavLink to="/tv-series">TV series</StyledNavLink>
        <StyledNavLink to="/channel">Channel</StyledNavLink>
        <StyledNavLink to="/settings">Settings</StyledNavLink>
        <SearchButton />
      </LinksContainer>
    </StyledNavbar>
  );
}

export default Navbar;
