import React from "react";
import styled from "styled-components";
import { Pane } from "evergreen-ui";
import Synopsis from "./../../components/Synopsis";
import Starring from "./../../components/Starring";
import RelatedMovies from "./../../components/RelatedMovies";
import Navbar from "./../../components/Navbar";
import background from "./../../assets/images/wonder-woman-landscape.jpg";

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
`;

function Details() {
  return (
    <MainContainer>
      <Navbar />
      <BodyContainer>
        <Synopsis />
        <Starring />
        <RelatedMovies />
      </BodyContainer>
    </MainContainer>
  );
}

export default Details;
