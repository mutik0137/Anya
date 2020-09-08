import React from 'react';
import { Switch, Route } from "react-router-dom";
import AuthPage from "./AuthPage";

const BasePage = () => {
  return (
    <Switch>
      <Route path="/auth" component={AuthPage} />
      {/*       <Route path={[ "/", "/main" ]} component={<div>main</div>} />*/}
    </Switch>
  );
};

export default BasePage;