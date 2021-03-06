import React, { useState } from 'react';
import { Form, Field } from "react-final-form";
import { authSource } from "Auth/sources";
import { loginValidate } from "Auth/utils";
import { StyledTextField, StyledButton } from "components/common";

import {
  StyledPaper,
  Title,
  FieldWrapper,
  PageSwitch,
  Link,
  ButtonWrapper,
  ErrorMessage
} from "./styled";

const Login = ({ setIsLogin, toChat }) => {
  const [error, setError] = useState(""); /* todo loder */

  const toReg = () => {
    setIsLogin(false);
  };

  const signIn = async values => {
    setError("");
    try {
      const res = await authSource.signIn(values);
      toChat({ name: res.data.name, id: res.data.id });
    } catch (error) {
      console.log("login", error.response || error);
      setError(error?.response?.data || error.toString());
    }
  };

  const handleOnSubmit = values => {
    localStorage.removeItem("uid");
    localStorage.removeItem("userName");

    signIn(values);
  };

  return (
    <StyledPaper>
      <Title>
        Авторизация
      </Title>
      <Form
        onSubmit={handleOnSubmit}
        validate={loginValidate}
      >
        {
          ({ handleSubmit }) => (
            <>
              {console.log(111, FieldWrapper, FieldWrapper, Field)}
              <FieldWrapper>
                <Field
                  name="login"
                  component={StyledTextField}
                  label="Введите логин"
                />
              </FieldWrapper>

              <FieldWrapper>
                <Field
                  name="password"
                  component={StyledTextField}
                  label="Введите пароль"
                  type="password"
                />
              </FieldWrapper>

              <PageSwitch>
                Нет аккаунта?
                <Link onClick={toReg}>Зарегистрироваться</Link>
              </PageSwitch>

              <ButtonWrapper>
                <StyledButton
                  onClick={handleSubmit}
                  size="small"
                >
                  Войти
                  </StyledButton>
              </ButtonWrapper>
              <ErrorMessage>
                {error}
              </ErrorMessage>
            </>
          )
        }
      </Form>
    </StyledPaper>
  )
};

export default Login;