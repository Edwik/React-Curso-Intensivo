import React, { useState } from "react";
import { Avatar } from "evergreen-ui";
import styled from "styled-components";
import { StyledHeading } from "./../../components";

const AvatarContainer = styled.span`
  margin-right: 0.6rem;
`;

const StyledAvatar = styled(Avatar)`
  margin-right: 0.2rem;
  padding: 0;
`;

const PersonContainer = styled.span`
  position: relative;
  bottom: 5px;
`;

function Recommended() {
  const [recommended, setrecommended] = useState([
    {
      id: 1,
      name: "Rio",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg",
    },
    {
      id: 2,
      name: "James",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg",
    },
  ]);

  return (
    <>
      <StyledHeading fontSize="1.1rem" paddingvalue="3rem 0 1rem 0">
        Recommended by {recommended.name}
      </StyledHeading>
      <StyledHeading fontSize="0.9rem">
        <AvatarContainer>
          {recommended.map((person) => (
            <span key={person.id}>
              <StyledAvatar src={person.photo} name={person.name} size={24} />
            </span>
          ))}
        </AvatarContainer>
        <PersonContainer>
          {recommended.map((person, index) => (
            <span key={person.id}>
              {person.name}
              {index < recommended.length - 1 ? " and " : ""}
            </span>
          ))}
        </PersonContainer>
      </StyledHeading>
    </>
  );
}

export default Recommended;
