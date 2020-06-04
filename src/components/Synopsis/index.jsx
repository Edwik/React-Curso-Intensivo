import React from "react";
import { Pane } from "evergreen-ui";
import styled from "styled-components";
import { StyledHeading } from "./../../components";

const SynopsisContainer = styled(Pane)`
  margin-right: 2rem;
  @media (min-width: 992px) {
    width: 50%;
  }
  @media (min-width: 1440px) {
    max-width: 864px;
  }
`;

function Synopsis({ synopsis }) {
  return (
    <SynopsisContainer>
      <StyledHeading fontSize="1.1rem" paddingvalue="3rem 0 1rem 0">
        Synopsis
      </StyledHeading>
      <StyledHeading textTransform="none">{synopsis}</StyledHeading>
    </SynopsisContainer>
  );
}

export default Synopsis;
