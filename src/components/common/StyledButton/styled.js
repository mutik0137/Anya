import styled from "styled-components";
import Button from "@material-ui/core/Button";

const StyledButton = styled(Button)`
  padding: 0 14px;
  
  height: 100%;
  background-color: ${p => p.color ? p.color : "#3598db" + "!important"};
  color: ${p => p.color ? p.color : "#ffffff" + "!important"};

  svg {
    fill: "#ffffff";
  }

  &.root {
    min-width: 120px;
    border-radius: ${p => p.borderRadius ? p.borderRadius : "4px"};
  }
`;

export default StyledButton;