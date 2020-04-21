import React, { useState } from "react";
import { Pane } from "evergreen-ui";
import styled from "styled-components";
import StyledHeading from "./../StyledHeading";
import imagePath from "./../../assets/images/movie-cover-02.jpg";
import imagePath03 from "./../../assets/images/movie-cover-03.jpg";
import star from "./../../assets/svg/star-solid.svg";

const RelatedMoviesList = styled(Pane)`
  display: flex;
  flex-flow: row wrap;
`;

const RelatedMovie = styled(Pane)`
  margin: 0.3rem 0.9rem;
  width: 8rem;
  position: relative;
  &:hover {
    transform: scale(1.2);
    filter: saturate(200%);
  }
`;

const ImgMovie = styled.img`
  width: 100%;
  border-radius: 0.3rem;
`;

const ScoreContainer = styled(Pane)`
  width: 3.3rem;
  height: 1.5rem;
  padding-left: 0.5rem;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  right: 0;
  top: 1rem;
  align-content: center;
`;

function RelatedMovies() {
  const [relatedMovies, setRelatedMovies] = useState([
    {
      id: 1,
      name: "Avengers: Endgame",
      image: imagePath,
      imagePath,
      score: 7.5,
    },
    { id: 2, name: "Captain Marvel", image: imagePath, score: 5 },
    { id: 3, name: "Black Panther", image: imagePath, score: 3.5 },
    { id: 4, name: "Avengers: Infinity War", image: imagePath03, score: 9 },
    { id: 5, name: "Ant-Man and the Wasp", image: imagePath03, score: 6.9 },
  ]);

  return (
    <>
      <StyledHeading
        fontSize="1.2rem"
        paddingvalue="3rem 0 1rem 0"
        fontWeight="bold"
      >
        Related Movies
      </StyledHeading>
      <RelatedMoviesList>
        {relatedMovies.map((movie) => (
          <RelatedMovie key={movie.id}>
            <ImgMovie src={movie.image} alt={movie.name} />
            <ScoreContainer>
              <img src={star} alt="Star icon" width="35%" />{" "}
              <span>{movie.score}</span>
            </ScoreContainer>
          </RelatedMovie>
        ))}
      </RelatedMoviesList>
    </>
  );
}

export default RelatedMovies;
