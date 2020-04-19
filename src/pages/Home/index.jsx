import React, { useState } from "react";
import { Pane, Heading, Button } from "evergreen-ui";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "./../../components/Navbar";
import MovieCategories from "./../../components/MovieCategories";
import background from "./../../assets/images/wonder-woman-portrait.jpg";

const MainContainer = styled(Pane)`
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

const BodyContainer = styled(Pane)`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;
`;

const TrendingMovie = styled(Pane)`
  width: 100%;
  padding-left: 3rem;
  @media (min-width: 992px) {
    width: 40%;
  }
`;

const CategoriesContainer = styled(Pane)`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  @media (min-width: 992px) {
    width: 60%;
  }
`;

const StyledHeading = styled(Heading)`
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const MovieTitle = styled(StyledHeading)`
  font-size: 3rem;
  font-weight: bold;
  line-height: 3rem;
`;

const StyledButton = styled(Button)`
  margin-right: 1rem;
  margin-bottom: 0.5rem;
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

const MovieInfo = styled.p`
  text-transform: uppercase;
  color: #fff;
  font-size: 0.8rem;
  margin-bottom: 2rem;
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
    <MainContainer>
      <Navbar />
      <BodyContainer>
        <TrendingMovie>
          <StyledHeading>Trending</StyledHeading>
          <MovieTitle>{trendingMovie.title}</MovieTitle>
          <MovieInfo>
            {trendingMovie.genres.join(", ")} * {trendingMovie.duration}
          </MovieInfo>
          <StyledButton appearance="primary" is={Link} to="/details">
            Watch now
          </StyledButton>
          <StyledButtonInfo appearance="primary" is={Link} to="/details">
            More info
          </StyledButtonInfo>
        </TrendingMovie>
        <CategoriesContainer>
          <MovieCategories />
        </CategoriesContainer>
      </BodyContainer>
    </MainContainer>
  );
}

export default Home;
