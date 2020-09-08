import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';

const StyledTextField = styled(TextField)`
  height: ${p => p.height ? p.height : "auto"};
  background-color: ${p => "#ffffff"};
  
  .input_root {
    height: 100%;
    padding-left: 4px;
  }
  .input_underline {
    border-color: "#3598db";
    ::after {
      border-color: "#3598db";
    }
  }
  .inputLabel_focused {
    color: ${p => (p.error && "red") || "#3598db"} !important; 
  }
`;
export default StyledTextField;