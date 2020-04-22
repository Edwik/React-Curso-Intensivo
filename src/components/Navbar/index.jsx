import React, { useState } from "react";
import { Pane } from "evergreen-ui";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./styles.scss";

const StyledNavbar = styled(Pane)`
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

const StyledLink = styled(Link)`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  padding: 1rem;
  text-decoration: none;
  &:active,
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
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
        <StyledLink to="/home">Movies</StyledLink>
        <StyledLink to="/details">TV series</StyledLink>
        <StyledLink to="/details">Channel</StyledLink>
        <StyledLink to="/details">Settings</StyledLink>
      </LinksContainer>
    </StyledNavbar>
  );
}

export default Navbar;
