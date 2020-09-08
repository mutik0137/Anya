import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from "Core/GlobalStyles";

import "core-js/stable";
import "regenerator-runtime/runtime";

import BasePage from "Pages";

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <React.StrictMode>
            <BasePage />
            <GlobalStyles />
        </React.StrictMode>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
