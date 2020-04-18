import React from "react";
import styled from "styled-components";
import { Pane } from "evergreen-ui";
import Synopsis from "./../../components/Synopsis";
import Starring from "./../../components/Starring";
import RelatedMovies from "./../../components/RelatedMovies";
import background from "./../../assets/images/marvell-05.jpg";

const StyledContainer = styled(Pane)`
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: #000;
  padding: 1rem;
  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 1)
    ),
    url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

function Details() {
  return (
    <StyledContainer>
      <Synopsis />
      <Starring />
      <RelatedMovies />
    </StyledContainer>
  );
}

export default Details;
