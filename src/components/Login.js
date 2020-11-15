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
    // let x = document.getElementById('input-text1-id');
    // if (x.className === 'input-text' && e.target.value) {
    //   console.log('okk i am');
    //   x.className += ' has-val';
    // } else {
    //   x.className = 'input-text';
    // }

    this.setState({
      username: e.target.value,
    });
  };
  handlePassword = (e) => {
    console.log('okk we');
    // let x = document.getElementById('input-text2-id');
    // if (x.className === 'input-text' && e.target.value) {
    //   console.log('okk i am');
    //   x.className += ' has-val';
    // } else {
    //   x.className = 'input-text';
    // }
    this.setState({
      password: e.target.value,
    });
  };
  handleSubmit = (e) => {
    console.log('okk');
    let { username, password } = this.state;
    username = username.trim();
    password = password.trim();
    if (username && password) {
      //ok ready to login
      e.preventDefault();

      if (username === 'Vikas' && password === '12345') {
        //make it redirect
        console.log('OKK1');
        console.log('locast', localStorage.getItem('user'));

        let user = {
          name: 'Vikas',
        };
        localStorage.setItem('isLogged', 'true');
        console.log('vikas', JSON.stringify(user));
        localStorage.setItem('user', JSON.stringify(user));
        console.log('afca', localStorage.getItem('user'));
        console.log('ok ready to go');
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
