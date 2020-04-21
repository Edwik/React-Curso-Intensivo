import styled from "styled-components";
import { Heading } from "evergreen-ui";

const StyledHeading = styled(Heading)`
  text-transform: ${(props) =>
    props.textTransform ? props.textTransform : "uppercase"};
  color: #fff;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "normal")};
  ${(props) => (props.headingtype === "info" ? "margin-bottom: 2rem" : "")};
  padding: ${(props) => (props.paddingvalue ? props.paddingvalue : "")};
  word-spacing: ${(props) =>
    props.wordSpacing ? props.wordSpacing : "normal"};
`;

export default StyledHeading;
