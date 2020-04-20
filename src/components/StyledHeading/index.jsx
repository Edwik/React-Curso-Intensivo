import styled from "styled-components";
import { Heading } from "evergreen-ui";

const StyledHeading = styled(Heading)`
  text-transform: uppercase;
  color: #fff;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "")};
  font-weight: ${(props) =>
    props.headingtype === "title" ? "bold" : "normal"};
  line-height: ${(props) =>
    props.headingtype === "title" ? "3rem" : "normal"};
  ${(props) => (props.headingtype === "info" ? "margin-bottom: 2rem" : "")};
`;

export default StyledHeading;
