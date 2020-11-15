import React, { Component } from 'react';

class Left extends Component {
  render() {
    return <div id="left-view">{this.props.children}</div>;
  }
}

export default Left;
