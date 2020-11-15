import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {
  logout = () => {
    localStorage.setItem('isLogged', 'false');
    localStorage.removeItem('user');
    this.props.handleLogout();
  };

  render() {
    return (
      <div>
        <div style={{ width: '100vw' }}>
          <nav className="nav" id="myTopnav">
            <div className="user">
              <img
                className="nav-img"
                src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-dp"
                id="user-dp"
              />
              <span>{this.props.name}</span>
            </div>
            <div className="search-container" id="search-conatiner1">
              <img
                className="search-icon"
                src="https://image.flaticon.com/icons/svg/483/483356.svg"
                alt="search-icon"
              />
              <input placeholder="Search" onChange={this.handleSearch} />
            </div>

            <div className="search-container" id="search-container2">
              <img
                className="search-icon"
                src="https://image.flaticon.com/icons/svg/483/483356.svg"
                alt="search-icon"
              />
              <input placeholder="Search" onChange={this.handleSearch} />
            </div>
            <div className="logout">
              <img
                className="nav-img"
                src="https://www.flaticon.com/svg/static/icons/svg/992/992680.svg"
                alt="logout"
                id="user-dp"
              />
              <span>
                <button className="btn-logout" onClick={this.logout}>
                  Logout
                </button>
              </span>
            </div>
            <div className="nav-menu" onClick={myFunction} id="nav-menu-id">
              <img
                className="nav-img"
                src="https://www.flaticon.com/svg/static/icons/svg/566/566020.svg"
                alt="navigation menu"
              />
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
function myFunction() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'nav') {
    x.className += ' responsive';
  } else {
    x.className = 'nav';
  }
}

export default Navbar;
