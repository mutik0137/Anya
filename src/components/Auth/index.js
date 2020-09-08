import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Login from "./Login.jsx";

import {
  PageContainer,
} from "./styled";

const Auth = ({ history }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toChat = (user = {}) => {
    history.push("/chat");
  };

  return (
    <PageContainer>
      {
        isLogin ?
          <Login
            setIsLogin={setIsLogin}
            toChat={toChat}
          />
          :
          <Register
            setIsLogin={setIsLogin}
            toChat={toChat}
          />
      }
    </PageContainer>
  )
};

export default withRouter(Auth);