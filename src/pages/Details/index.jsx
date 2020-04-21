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

const DetailsMovie = styled(Pane)``;

function Details() {
  const [detailsMovie, setDetailsMovie] = useState({
    id: 1,
    title: "Wonder Woman",
    genres: ["action", "adventure", "fantasy"],
    duration: "2h 45min",
    imagePath: "",
    year: 2017,
    score: 8.2,
    category: "PG-13",
  });

  return (
    <MainContainer>
      <Navbar />
      <BodyContainer>
        <DetailsMovie>
          <StyledHeading
            headingtype="title"
            fontSize="3rem"
            fontWeight="bold"
            lineHeight="3rem"
          >
            {detailsMovie.title}
          </StyledHeading>
          <StyledHeading headingtype="info" fontSize="0.8rem">
            {detailsMovie.genres.join(", ")} * {detailsMovie.duration}
          </StyledHeading>
          <StyledButton btntype="primary" appearance="primary">
            Watch now
          </StyledButton>
          <StyledButton btntype="secondary" appearance="primary">
            More info
          </StyledButton>
        </DetailsMovie>
        <Synopsis />
        <Starring />
        <RelatedMovies />
      </BodyContainer>
    </MainContainer>
  );
}

export default Details;
