import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Error404 from './Error404';
import { Home } from './index';
import Login from './Login';
const PrivateRoute = (props) => {
  const { path, component: Component, isLogged, handleLogout, user } = props;
  return (
    <Route
      path={path}
      render={(props) => {
        return isLogged === 'true' ? (
          <Component
            {...props}
            isLogged={isLogged}
            {...user}
            handleLogout={handleLogout}
          />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: 'false',
      user: null,
    };
  }
  componentDidMount() {
    this.handleLogin();
  }

  handleLogin = () => {
    this.setState({
      isLogged: localStorage.getItem('isLogged'),
      user: JSON.parse(localStorage.getItem('user')),
    });
  };
  handleLogout = () => {
    this.setState({
      isLogged: localStorage.getItem('isLogged'),
      user: null,
    });
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/login"
            render={(props) => {
              return (
                <Login
                  {...props}
                  handleLogin={this.handleLogin}
                  isLogged={this.state.isLogged}
                />
              );
            }}
          />
          <PrivateRoute
            exact
            path="/"
            component={Home}
            user={this.state.user}
            isLogged={this.state.isLogged}
            handleLogout={this.handleLogout}
          />
          <Route component={Error404} />
        </Switch>
      </Router>
    );
  }
}

export default App;
