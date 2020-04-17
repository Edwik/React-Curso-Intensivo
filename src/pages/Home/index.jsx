import React, { useState } from "react";
import { Pane, Card, Heading, Button } from "evergreen-ui";
import styled from "styled-components";
import background from "./../../assets/images/marvell-02.jpg";
import Navbar from "./../../components/Navbar";

const StyledText = styled.span`
  text-transform: uppercase;
  color: #fff;
  display: block;
  font-size: 0.8rem;
  margin-bottom: 2rem;
`;
const StyledMainContainer = styled(Pane)`
  width: 100%;
  height: 100%;
  background-color: #000;
`;
const StyledBodyContainer = styled(Pane)`
  display: flex;
`;

const StyledMoviesPane = styled(Pane)`
  margin: 2em 0;
  width: 60%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;
const StyledTrendingMovie = styled(Pane)`
  width: 40%;
  padding-left: 3rem;
`;

const StyledCard = styled(Card)`
  margin: 0.5em;
  width: 250px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledHeading = styled(Heading)`
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  padding: 6em 0.5em 0.5em 0.5em;
`;

const StyledMovieTitle = styled(StyledHeading)`
  font-size: 3rem;
  padding-left: 0;
`;
const StyledButton = styled(Button)`
  margin-right: 1rem;
  text-transform: uppercase;
`;

function Home() {
  const [trendingMovie, SetTrendingMovie] = useState({
    id: 1,
    title: "WonderWoman",
    genres: ["action", "adventure", "fantasy"],
    duration: "2h 45min",
    imagePath: "",
  });

  const [sections, setSections] = useState([
    { id: 1, title: "Most popular" },
    { id: 2, title: "New releases" },
    { id: 3, title: "Friend recommendations" },
    { id: 4, title: "Bases on actor/actress" },
    { id: 5, title: "Charts & Trends" },
    { id: 6, title: "Browse movies" },
    { id: 7, title: "My favorities" },
    { id: 8, title: "History" },
  ]);
  return (
    <StyledMainContainer>
      <Navbar />
      <StyledBodyContainer>
        <StyledTrendingMovie>
          <StyledMovieTitle>{trendingMovie.title}</StyledMovieTitle>
          <StyledText>
            {trendingMovie.genres.join(", ")} * {trendingMovie.duration}
          </StyledText>
          <StyledButton appearance="primary">Watch now</StyledButton>
          <StyledButton appearance="primary" intent="success">
            More info
          </StyledButton>
        </StyledTrendingMovie>

        <StyledMoviesPane>
          {sections.map((section) => (
            <StyledCard key={section.id}>
              <StyledHeading>{section.title}</StyledHeading>
            </StyledCard>
          ))}
        </StyledMoviesPane>
      </StyledBodyContainer>
    </StyledMainContainer>
  );
}

export default Home;
