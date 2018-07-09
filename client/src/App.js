import React, { Component } from "react";
import "./App.css";
import Main from "./pages/Main/Main";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee)

class App extends Component {
  render() {
    return (
      <Main/>
    );
  }
}

export default App;
