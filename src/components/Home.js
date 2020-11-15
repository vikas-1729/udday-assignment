import React, { Component } from 'react';
import { Left, Right, Navbar, Temp1, Error404, Default } from './index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftComponent: <Default />,
      rightComponent: <Default />,
    };
  }
  renderComponent = (root, url) => {
    if (root !== 'localhost:3000') {
      return 'Error404';
    }

    switch (url) {
      case '':
        return <Default />;
      case 'temp1':
        return <Temp1 />;

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
        <Left>{leftComponent}</Left>
        <Right>{rightComponent}</Right>
      </div>
    );
  }
}

export default Home;
