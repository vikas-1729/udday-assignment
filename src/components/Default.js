import React, { Component } from 'react';

class Default extends Component {
  render() {
    return (
      <div className="child-container">
        <h3>
          Enter url/webpage in {this.props.view} search bar to view here to view
          here{' '}
        </h3>
        <p style={{ marginTop: 30 }}>
          you can also directly wirte pages pages available
          maths,physics,chemistry,enviroment,temp1
        </p>
      </div>
    );
  }
}

export default Default;
