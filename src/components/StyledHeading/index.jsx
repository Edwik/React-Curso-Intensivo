import styled from "styled-components";
import { Heading } from "evergreen-ui";

const StyledHeading = styled(Heading)`
  text-transform: uppercase;
  color: #fff;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "")};
  font-weight: ${(props) =>
    props.headingType === "title" ? "bold" : "normal"};
  line-height: ${(props) =>
    props.headingType === "title" ? "3rem" : "normal"};
  ${(props) => (props.headingType === "info" ? "margin-bottom: 2rem" : "")};
`;

export default StyledHeading;
