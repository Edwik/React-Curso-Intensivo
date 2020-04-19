import { Button } from "evergreen-ui";
import styled from "styled-components";

const StyledButton = styled(Button)`
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  background-image: none;
  background-color: ${(props) =>
    props.btnType === "primary" ? "#745496" : "rgba(255, 255, 255, 0.2)"};
  &:hover,
  &:active {
    background-image: none !important;
    background-color: ${(props) =>
      props.btnType === "primary" ? "#7d60d7" : "rgba(0, 0, 0, 0.2)"};
  }
`;

export default StyledButton;
