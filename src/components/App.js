import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Left, Right } from './index';
class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />

        <div id="main-container">
          <Left />
          <Right />
        </div>
      </Router>
    );
  }
}

export default App;
