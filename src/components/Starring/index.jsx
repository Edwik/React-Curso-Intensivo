import React, { useState } from "react";
import { Pane, Avatar } from "evergreen-ui";
import styled from "styled-components";
import StyledHeading from "./../StyledHeading";
import imagePath from "./../../assets/images/gal-gadot.jpg";

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
    filter: saturate(200%);
  }
`;

function Starring() {
  const [starringMovie, setStarringMovie] = useState([
    { id: 1, name: "Gal Gadot", photo: imagePath, quantityMovies: 21 },
    { id: 2, name: "Chris Pine", photo: imagePath, quantityMovies: 53 },
    { id: 3, name: "Connie Nielsen", photo: imagePath, quantityMovies: 43 },
    { id: 4, name: "Danny Huston", photo: imagePath, quantityMovies: 39 },
    { id: 5, name: "David Thewlis", photo: imagePath, quantityMovies: 23 },
  ]);

  return (
    <>
      <StyledHeading
        fontSize="1.2rem"
        paddingvalue="3rem 0 1rem 0"
        fontWeight="bold"
      >
        Starring
      </StyledHeading>
      <StarringMovieList>
        {starringMovie.map((starring) => (
          <StarringMovie key={starring.id}>
            <Avatar src={starring.photo} name={starring.name} size={100} />
            <StyledHeading fontSize="0.9rem">{starring.name}</StyledHeading>
            <StyledHeading fontSize="0.6rem">
              {starring.quantityMovies} Movies
            </StyledHeading>
          </StarringMovie>
        ))}
      </StarringMovieList>
    </>
  );
}

export default Starring;
