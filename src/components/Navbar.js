import React, { Component } from 'react';
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchContainer1: '',
      searchContainer2: '',
    };
  }
  handleEnter = (e, view) => {
    if (e.key === 'Enter') {
      this.handleSearch(view);
    }
  };
  handleSearchContainer1 = (e) => {
    this.setState({
      searchContainer1: e.target.value,
    });
  };
  handleSearchContainer2 = (e) => {
    this.setState({
      searchContainer2: e.target.value,
    });
  };
  logout = () => {
    localStorage.setItem('isLogged', 'false');
    localStorage.removeItem('user');
    this.props.handleLogout();
  };
  handleSearch = (view) => {
    let val = '';
    let root = '';
    if (view === 'left') {
      root = this.state.searchContainer1.split('/')[0];
      val = this.state.searchContainer1.split('/')[1];
      if (val === undefined) {
        val = root;
        root = 'localhost:3000';
      }
    } else if (view === 'right') {
      root = this.state.searchContainer2.split('/')[0];
      val = this.state.searchContainer2.split('/')[1];
      if (val === undefined) {
        val = root;
        root = 'localhost:3000';
      }
    }
    this.props.componentToRender(root, val, view);
  };

  render() {
    return (
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
            <input
              placeholder="Search to view in left part"
              value={this.state.searchContainer1}
              onChange={(e) => this.handleSearchContainer1(e)}
              onKeyPress={(e) => {
                this.handleEnter(e, 'left');
              }}
            />
          </div>

          <div className="search-container" id="search-container2">
            <img
              className="search-icon"
              src="https://image.flaticon.com/icons/svg/483/483356.svg"
              alt="search-icon"
            />
            <input
              placeholder="Search to view in right part"
              value={this.state.searchContainer2}
              onChange={(e) => this.handleSearchContainer2(e)}
              onKeyPress={(e) => {
                this.handleEnter(e, 'right');
              }}
            />
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
