import React, { Component } from 'react';

import '../assest/css/login-form.css';
class Login extends Component {
  render() {
    return (
      <div class="login-outer-container">
        <div class="login-inner-container">
          <div class="login-container">
            <form class="login-form">
              <div class="header">
                <span class="login-header">Welcome</span>
                <img
                  class="avtar"
                  src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
                  alt="avatar"
                />
              </div>

              <div class="username-container input-container">
                <input
                  type="text"
                  class="input-text input-text1"
                  name="username"
                  autocomplete="off"
                  required="true"
                />
                <span class="focus-input100" data-placeholder="Username"></span>
              </div>
              <div class="password-container input-container">
                <input
                  type="password"
                  name="password"
                  class="input-text"
                  autocomplete="off"
                  required="true"
                />
                <span
                  class="focus-input100 focus-password"
                  data-placeholder="Password"
                ></span>
              </div>
              <div class="container-login-form-btn">
                <div class="wrap-login-form-btn">
                  <div class="login-form-bgbtn"></div>
                  <button class="login-form-btn login-text">
                    <span class="login-text">Login</span>
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
