import React, { Component } from 'react';
import Left from './Left';
import Navbar from './Navbar';
import Right from './Right';

class Home extends Component {
  render() {
    console.log('hlo', this.props);
    return (
      <div id="main-container">
        <Navbar {...this.props} />
        <Left />
        <Right />
      </div>
    );
  }
}

export default Home;
