import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from "./Components/Navbar";


import "core-js/stable";
import "regenerator-runtime/runtime";

class App extends React.Component {

  render() {
    return (
      <React.StrictMode>
        <NavBar a1="3" >
          12312
        </NavBar>
      </React.StrictMode>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
