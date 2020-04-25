import styled from "styled-components";
import { Heading } from "evergreen-ui";

const StyledHeading = styled(Heading)`
  text-transform: ${(props) =>
    props.textTransform ? props.textTransform : "uppercase"};
  color: #fff;
  ${(props) => (props.headingtype === "info" ? "margin-bottom: 2rem" : "")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
  padding: ${(props) => (props.paddingvalue ? props.paddingvalue : "")};
  word-spacing: ${(props) =>
    props.wordSpacing ? props.wordSpacing : "normal"};
`;

export default StyledHeading;
