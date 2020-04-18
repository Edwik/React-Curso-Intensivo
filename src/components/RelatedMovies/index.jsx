import React, { useState } from "react";
import { Pane, Card, Heading } from "evergreen-ui";
import styled from "styled-components";
import imagePath from "./../../assets/images/movie-cover.jpg";

const RelatedMoviesList = styled(Pane)`
  display: flex;
  flex-flow: row wrap;
`;

const RelatedMovie = styled(Card)`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  padding: 1rem 0.7rem;
  text-align: center;
`;

const ImgMovie = styled.img`
  height: 14rem;
  width: 9rem;
  border-radius: 0.3rem;
`;

const Title = styled(Heading)`
  padding: 4rem 0 0.5rem 1rem;
  text-transform: uppercase;
  color: #fff;
  font-size: 1.2rem;
`;

function RelatedMovies() {
  const [relatedMovies, setRelatedMovies] = useState([
    {
      id: 1,
      name: "Avengers: Endgame",
      image: imagePath,
      imagePath,
      rating: 7.5,
    },
    { id: 2, name: "Captain Marvel", image: imagePath, rating: 5 },
    { id: 3, name: "Black Panther", image: imagePath, rating: 3.5 },
    { id: 4, name: "Avengers: Infinity War", image: imagePath, rating: 9 },
    { id: 5, name: "Ant-Man and the Wasp", image: imagePath, rating: 6 },
  ]);

  return (
    <>
      <Title>Related Movies</Title>
      <RelatedMoviesList>
        {relatedMovies.map((movie) => (
          <RelatedMovie key={movie.id}>
            <ImgMovie src={movie.image} alt={movie.name} />
          </RelatedMovie>
        ))}
      </RelatedMoviesList>
    </>
  );
}

export default RelatedMovies;
