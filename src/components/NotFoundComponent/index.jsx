import React from "react";
import { StyledHeading } from "../../components";

function NotFoundComponent() {
  return (
    <StyledHeading
      textAlign="center"
      fontSize="30px"
      lineHeight="300px"
      textTransform="capitalize"
    >
      404 Page not found
    </StyledHeading>
  );
}

export { NotFoundComponent };
