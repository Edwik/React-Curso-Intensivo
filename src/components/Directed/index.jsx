import React, { useState } from "react";
import { StyledHeading } from "./../../components";

function Directed() {
  const [director, setDirector] = useState({
    id: 1,
    name: "Patty Jenkins",
  });

  return (
    <>
      <StyledHeading fontSize="1.1rem" paddingvalue="3rem 0 1rem 0">
        Directed by
      </StyledHeading>
      <StyledHeading fontSize="0.9rem">{director.name}</StyledHeading>
    </>
  );
}

export default Directed;
