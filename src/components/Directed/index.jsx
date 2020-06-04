import React from "react";
import { StyledHeading } from "./../../components";

function Directed({ directors }) {
  return (
    <>
      <StyledHeading fontSize="1.1rem" paddingvalue="3rem 0 1rem 0">
        Directed by
      </StyledHeading>
      <StyledHeading fontSize="0.9rem">{directors.join(", ")}</StyledHeading>
    </>
  );
}

export default Directed;
