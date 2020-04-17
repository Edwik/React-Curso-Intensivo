import React, { useState } from "react";
import { Pane, Card, Heading } from "evergreen-ui";
import styled from "styled-components";
import background from "./../../assets/images/marvell-02.jpg";

const StyledContainer = styled(Pane)`
  width: 100%;
  height: 100%;
  background-color: #000;
`;

const StyledPane = styled(Pane)`
  margin: 2em 0;
  width: 60%;
  height: 60%;
  float: right;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
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

function Home() {
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
    <StyledContainer>
      <StyledPane>
        {sections.map((section) => (
          <StyledCard key={section.id}>
            <StyledHeading>{section.title}</StyledHeading>
          </StyledCard>
        ))}
      </StyledPane>
    </StyledContainer>
  );
}

export default Home;
