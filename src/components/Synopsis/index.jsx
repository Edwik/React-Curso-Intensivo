import React, { useState } from "react";
import styled from "styled-components";
import { Pane, Heading } from "evergreen-ui";

const Title = styled(Heading)`
  padding: 4rem 0 0.5rem 1rem;
  text-transform: uppercase;
  color: #fff;
  font-size: 1.2rem;
`;

const SynopsisMovie = styled(Pane)`
  padding: 1.5rem;
`;

function Synopsis() {
  const [synopsisMovie, setSynopsisMovie] = useState({
    id: 1,
    info:
      "Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that is raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time. Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny.",
  });
  return (
    <>
      <Title>Synopsis</Title>
      <SynopsisMovie>{synopsisMovie.info}</SynopsisMovie>
    </>
  );
}

export default Synopsis;
