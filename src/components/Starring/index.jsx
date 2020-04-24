import React from "react";
import { Pane, Avatar } from "evergreen-ui";
import styled from "styled-components";
import StyledHeading from "./../StyledHeading";

const StarringMovieList = styled(Pane)`
  display: flex;
  flex-flow: row wrap;
`;

const StarringMovie = styled(Pane)`
  width: 7.5rem;
  margin: 0.3rem 0.9rem;
  text-align: center;
  &:hover {
    transform: scale(1.2);
  }
`;

function Starring({ starring }) {
  return (
    <>
      <StyledHeading fontSize="1.1rem" paddingvalue="3rem 0 1rem 0">
        Starring
      </StyledHeading>
      <StarringMovieList>
        {starring.map((star) => (
          <StarringMovie key={star.id}>
            <Avatar src={star.photo} name={star.name} size={100} />
            <StyledHeading fontSize="0.9rem">{star.name}</StyledHeading>
            <StyledHeading fontSize="0.6rem">
              {star.movies} Movies
            </StyledHeading>
          </StarringMovie>
        ))}
      </StarringMovieList>
    </>
  );
}

export default Starring;
