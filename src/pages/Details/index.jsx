import React from "react";
import styled from "styled-components";
import { Pane } from "evergreen-ui";
import Synopsis from "./../../components/Synopsis";
import Starring from "./../../components/Starring";
import RelatedMovies from "./../../components/RelatedMovies";
import Navbar from "./../../components/Navbar";
import background from "./../../assets/images/wonder-woman-landscape.jpg";

const StyledContainer = styled(Pane)`
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

function Details() {
  return (
    <StyledContainer>
      <Navbar />
      <Synopsis />
      <Starring />
      <RelatedMovies />
    </StyledContainer>
  );
}

export default Details;
