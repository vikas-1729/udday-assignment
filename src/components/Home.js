import React, { Component } from 'react';
import {
  Left,
  Right,
  Navbar,
  Temp1,
  Error404,
  Default,
  Maths,
  Chemistry,
  Physics,
  Enviroment,
} from './index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftComponent: <Default view="left" />,
      rightComponent: <Default view="right" />,
    };
  }
  renderComponent = (root, url) => {
    // here we decide which component to render
    root = root.toLowerCase();
    url = url.toLowerCase();
    if (root !== 'localhost:3000') {
      return <Error404 />;
    }

    switch (
      url // you can create and add more webpages here
    ) {
      case '':
        return <Default />;
      case 'temp1':
        return <Temp1 />;
      case 'physics':
        return <Physics />;
      case 'chemistry':
        return <Chemistry />;
      case 'maths':
      case 'mathematics':
      case 'math':
        return <Maths />;
      case 'enviroment':
        return <Enviroment />;

      default:
        return <Error404 />;
    }
  };
  componentToRender = (root, url, view) => {
    if (view === 'left') {
      this.setState({
        leftComponent: this.renderComponent(root, url),
      });
    } else if (view === 'right') {
      this.setState({
        rightComponent: this.renderComponent(root, url),
      });
    }
  };
  render() {
    const { leftComponent, rightComponent } = this.state;
    return (
      <div id="main-container">
        <Navbar {...this.props} componentToRender={this.componentToRender} />
        <Left>
          <h2 style={{ marginTop: 30 }}>Result of left-search</h2>
          {leftComponent}
        </Left>
        <Right>
          {' '}
          <h2 style={{ marginTop: 30 }}>Result of right-search</h2>
          {rightComponent}
        </Right>
      </div>
    );
  }
}

export default Home;
