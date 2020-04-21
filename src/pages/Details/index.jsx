import React, { useState } from "react";
import styled from "styled-components";
import { Pane } from "evergreen-ui";
import Synopsis from "./../../components/Synopsis";
import Starring from "./../../components/Starring";
import RelatedMovies from "./../../components/RelatedMovies";
import Navbar from "./../../components/Navbar";
import background from "./../../assets/images/wonder-woman-landscape.jpg";
import StyledHeading from "./../../components/StyledHeading";
import StyledButton from "./../../components/Button";
import Directed from "./../../components/Directed";
import Recommended from "./../../components/Recommended";
import star from "./../../assets/svg/star-solid.svg";

const MainContainer = styled(Pane)`
  color: #fff;
  background-color: #000;
  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 1)
    ),
    url(${background});
  background-repeat: no-repeat;
`;

const BodyContainer = styled(Pane)`
  display: flex;
  flex-flow: column wrap;
  padding: 2rem;
`;

const TitleMovie = styled(StyledHeading)`
  display: inline-block;
`;

const ScoreContainer = styled(Pane)`
  margin-left: 0.5rem;
  font-weight: bold;
  display: inline-block;
  position: relative;
  bottom: 10px;
`;

const CategoryContainer = styled.span`
  background-color: rgba(255, 255, 255, 0.28);
  padding: 0.2rem 0.3rem;
  border-radius: 0.2rem;
`;

const WraperSynopsisContainer = styled(Pane)`
  display: flex;
  flex-flow: row wrap;
`;

function Details() {
  const [detailsMovie, setDetailsMovie] = useState({
    id: 1,
    title: "Wonder Woman",
    genres: ["action", "adventure", "fantasy"],
    duration: "2h 21min",
    imagePath: "",
    year: 2017,
    score: 8.2,
    category: "PG-13",
  });

  return (
    <MainContainer>
      <Navbar />
      <BodyContainer>
        <Pane>
          <TitleMovie
            headingtype="title"
            fontSize="3rem"
            fontWeight="bold"
            lineHeight="5rem"
          >
            {detailsMovie.title}
          </TitleMovie>
          <ScoreContainer>
            <img src={star} alt="Star icon" width="15px" />{" "}
            <span>{detailsMovie.score}</span>
          </ScoreContainer>
          <StyledHeading
            headingtype="info"
            fontSize="0.8rem"
            wordSpacing="0.3125rem"
          >
            {detailsMovie.genres.join(", ")} • {detailsMovie.duration} •{" "}
            {detailsMovie.year} •{" "}
            <CategoryContainer>{detailsMovie.category}</CategoryContainer>
          </StyledHeading>
          <StyledButton btntype="primary" appearance="primary">
            Watch now
          </StyledButton>
          <StyledButton btntype="secondary" appearance="primary">
            More info
          </StyledButton>
        </Pane>
        <WraperSynopsisContainer>
          <Synopsis />
          <Pane>
            <Directed />
            <Recommended />
          </Pane>
        </WraperSynopsisContainer>
        <Starring />
        <RelatedMovies />
      </BodyContainer>
    </MainContainer>
  );
}

export default Details;
