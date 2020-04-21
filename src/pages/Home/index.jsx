import React, { useState } from "react";
import { Pane } from "evergreen-ui";
import styled from "styled-components";
import { Link } from "react-router-dom";
import background from "./../../assets/images/wonder-woman-portrait.jpg";
import {
  Navbar,
  MovieCategories,
  StyledButton,
  StyledHeading,
} from "./../../components";

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

function Home() {
  const [trendingMovie, setTrendingMovie] = useState({
    id: 1,
    title: "Wonder Woman",
    genres: ["action", "adventure", "fantasy"],
    duration: "2h 21min",
    imagePath: "",
  });

  return (
    <MainContainer>
      <Navbar />
      <BodyContainer>
        <TrendingMovie>
          <StyledHeading headingtype="subtitle" fontSize="1rem">
            Trending
          </StyledHeading>
          <StyledHeading
            headingtype="title"
            fontSize="3rem"
            fontWeight="bold"
            lineHeight="5rem"
          >
            {trendingMovie.title}
          </StyledHeading>
          <StyledHeading
            headingtype="info"
            fontSize="0.8rem"
            wordSpacing="0.3125rem"
          >
            {trendingMovie.genres.join(", ")} • {trendingMovie.duration}
          </StyledHeading>
          <StyledButton
            btntype="primary"
            appearance="primary"
            is={Link}
            to="/details"
          >
            Watch now
          </StyledButton>
          <StyledButton
            btntype="secondary"
            appearance="primary"
            is={Link}
            to="/details"
          >
            More info
          </StyledButton>
        </TrendingMovie>
        <CategoriesContainer>
          <MovieCategories />
        </CategoriesContainer>
      </BodyContainer>
    </MainContainer>
  );
}

export default Home;
