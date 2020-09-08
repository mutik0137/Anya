import {
  LOGIN_VALIDATE_ERRORS,
} from "Auth/constants";

export const loginValidate = values => {
  const errors = {};

  if (!values.login) {
    errors.login = LOGIN_VALIDATE_ERRORS.login.empty;
  }
  if (!values.password) {
    errors.password = LOGIN_VALIDATE_ERRORS.password.empty;
  }

  return errors;
};


export const generateUID = () => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
  for (let i = 0; i < 15; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};