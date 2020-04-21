import React, { useState } from "react";
import { Pane } from "evergreen-ui";
import styled from "styled-components";
import { StyledHeading } from "./../../components";

const SynopsisContainer = styled(Pane)`
  margin-right: 2rem;
  @media (min-width: 992px) {
    width: 50%;
  }
`;

function Synopsis() {
  const [synopsisMovie, setSynopsisMovie] = useState({
    id: 1,
    info:
      "Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that is raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time. Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny.",
  });
  return (
    <SynopsisContainer>
      <StyledHeading fontSize="1.1rem" paddingvalue="3rem 0 1rem 0">
        Synopsis
      </StyledHeading>
      <StyledHeading textTransform="none">{synopsisMovie.info}</StyledHeading>
    </SynopsisContainer>
  );
}

export default Synopsis;
