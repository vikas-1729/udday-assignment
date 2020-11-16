import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import '../assest/css/login-form.css';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: null,
    };
  }

  handleUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleSubmit = (e) => {
    let { username, password } = this.state;
    username = username.trim();
    password = password.trim();
    if (username && password) {
      //ok ready to login
      e.preventDefault();

      if (username === 'Vikas' && password === '12345') {
        //make it redirect
        let user = {
          name: 'Vikas',
        };
        localStorage.setItem('isLogged', 'true');
        localStorage.setItem('user', JSON.stringify(user));
        this.props.handleLogin();
        return;
      }
    }

    this.setState({
      error: 'Wrong credentials',
    });
    return;
  };
  render() {
    if (this.props.isLogged === 'true') {
      return <Redirect to="/" />;
    }
    const { error } = this.state;
    return (
      <div className="login-outer-container">
        <div className="login-inner-container">
          <div className="login-container">
            {error && (
              <div className="error-div">
                <span className="alert error-dialog">{error}</span>
              </div>
            )}
            <form className="login-form" method="post">
              <div className="header">
                <span className="login-header">Welcome</span>
                <img
                  className="avtar"
                  src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
                  alt="avatar"
                />
              </div>
              <div className="username-container input-container">
                <input
                  id="input-text1-id"
                  type="text"
                  className={
                    this.state.username ? 'input-text has-val' : 'input-text'
                  }
                  name="username"
                  autoComplete="off"
                  value={this.state.username}
                  required
                  onChange={(e) => this.handleUsername(e)}
                />
                <span
                  className="focus-input100"
                  data-placeholder="Username"
                ></span>
              </div>
              <div className="password-container input-container">
                <input
                  id="input-text2-id"
                  type="password"
                  name="password"
                  className={
                    this.state.password ? 'input-text has-val' : 'input-text'
                  }
                  autoComplete="off"
                  value={this.state.password}
                  required
                  onChange={(e) => this.handlePassword(e)}
                  required
                />
                <span
                  className="focus-input100 focus-password"
                  data-placeholder="Password"
                ></span>
              </div>
              <div className="container-login-form-btn">
                <div className="wrap-login-form-btn">
                  <button
                    className="login-form-btn login-form-bgbtn"
                    onClick={(e) => this.handleSubmit(e)}
                  >
                    <span className="login-text">Login</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
