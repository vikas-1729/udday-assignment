import React, { Component } from 'react';

class Error404 extends Component {
  render() {
    return (
      <div className="child-container">
        <h3>Not any page exist please read readme.md to know the url!!</h3>
        <div>
          <img
            className="child-container-img"
            src="https://www.flaticon.com/svg/static/icons/svg/943/943591.svg"
            alt="error-404"
          />
        </div>
      </div>
    );
  }
}

export default Error404;
