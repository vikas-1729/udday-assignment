import React, { Component } from 'react';

class Right extends Component {
  render() {
    return <div id="right-view">{this.props.children}</div>;
  }
}

export default Right;
