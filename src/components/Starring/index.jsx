import React, { useState } from "react";
import { Pane, Heading, Avatar } from "evergreen-ui";
import styled from "styled-components";
import imagePath from "./../../assets/images/gal-gadot.jpg";

const StarringMovieList = styled(Pane)`
  display: flex;
  flex-flow: row wrap;
`;

const StarringMovie = styled(Pane)`
  text-transform: uppercase;
  padding: 1rem 1.5rem;
  text-align: center;
`;

const Title = styled(Heading)`
  padding: 4rem 0 0.5rem 1rem;
  text-transform: uppercase;
  color: #fff;
  font-size: 1.2rem;
`;

const StarringName = styled(Heading)`
  color: #fff;
  font-size: 0.8rem;
`;

const StarringQuantityMovies = styled(Heading)`
  color: #fff;
  font-size: 0.6rem;
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
      <Title>Starring</Title>
      <StarringMovieList>
        {starringMovie.map((starring) => (
          <StarringMovie key={starring.id}>
            <Avatar src={starring.photo} name={starring.name} size={80} />
            <StarringName>{starring.name}</StarringName>
            <StarringQuantityMovies>
              {starring.quantityMovies} Movies
            </StarringQuantityMovies>
          </StarringMovie>
        ))}
      </StarringMovieList>
    </>
  );
}

export default Starring;
