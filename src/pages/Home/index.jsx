import React, { useState } from "react";
import { Pane, Heading, Button } from "evergreen-ui";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "./../../components/Navbar";
import MovieCategories from "./../../components/MovieCategories";
import background from "./../../assets/images/wonder-woman-portrait.jpg";

const StyledText = styled.p`
  text-transform: uppercase;
  color: #fff;
  font-size: 0.8rem;
  margin-bottom: 2rem;
`;

const StyledMainContainer = styled(Pane)`
  width: 100%;
  height: 100%;
  background-color: #000;
  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.3) 50%
    ),
    url(${background});
  background-repeat: no-repeat;
  background-size: 100vh;
`;

const StyledBodyContainer = styled(Pane)`
  display: flex;
  align-items: flex-end;
`;

const StyledMoviesPane = styled(Pane)`
  width: 60%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;
const StyledTrendingMovie = styled(Pane)`
  width: 40%;
  padding-left: 3rem;
`;

const StyledHeading = styled(Heading)`
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const StyledMovieTitle = styled(StyledHeading)`
  font-size: 3rem;
  font-weight: bold;
  line-height: 3rem;
`;

const StyledButton = styled(Button)`
  margin-right: 1rem;
  text-transform: uppercase;
  background-image: none;
  background-color: #745496;
  &:hover,
  &:active {
    background-image: none !important;
    background-color: #7d60d7;
  }
`;

const StyledButtonInfo = styled(StyledButton)`
  background-color: rgba(255, 255, 255, 0.2);
  &:hover,
  &:active {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

function Home() {
  const [trendingMovie, setTrendingMovie] = useState({
    id: 1,
    title: "Wonder Woman",
    genres: ["action", "adventure", "fantasy"],
    duration: "2h 45min",
    imagePath: "",
  });

  return (
    <StyledMainContainer>
      <Navbar />
      <StyledBodyContainer>
        <StyledTrendingMovie>
          <StyledHeading>Trending</StyledHeading>
          <StyledMovieTitle>{trendingMovie.title}</StyledMovieTitle>
          <StyledText>
            {trendingMovie.genres.join(", ")} * {trendingMovie.duration}
          </StyledText>
          <StyledButton appearance="primary" is={Link} to="/details">
            Watch now
          </StyledButton>
          <StyledButtonInfo appearance="primary" is={Link} to="/details">
            More info
          </StyledButtonInfo>
        </StyledTrendingMovie>
        <StyledMoviesPane>
          <MovieCategories />
        </StyledMoviesPane>
      </StyledBodyContainer>
    </StyledMainContainer>
  );
}

export default Home;
