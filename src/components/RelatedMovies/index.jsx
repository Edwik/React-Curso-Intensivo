import React from "react";
import { Pane } from "evergreen-ui";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledHeading } from "./../../components";
import star from "./../../assets/svg/star-solid.svg";

const RelatedMoviesList = styled(Pane)`
  display: flex;
  flex-flow: row wrap;
`;

const RelatedMovie = styled(Link)`
  color: #fff;
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

function RelatedMovies({ relatedMovies }) {
  return (
    <>
      <StyledHeading fontSize="1.1rem" paddingvalue="3rem 0 1rem 0">
        Related Movies
      </StyledHeading>
      <RelatedMoviesList>
        {relatedMovies.map((movie) => (
          <RelatedMovie key={movie.id} to={`/movie/${movie.id}`}>
            <ImgMovie src={movie.image} alt={movie.name} />
            <ScoreContainer>
              <img src={star} alt="Star icon" width="30%" />{" "}
              <span>{movie.score}</span>
            </ScoreContainer>
          </RelatedMovie>
        ))}
      </RelatedMoviesList>
    </>
  );
}

export default RelatedMovies;
