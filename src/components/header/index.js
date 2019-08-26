import React, { Component } from 'react';

import './index.css';
import { NavLink } from 'react-router-dom';


class Header extends Component {
  render(){
    return (
      <div className="Header">

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">LGBT MENTORING</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
            </li>

            {
              this.props.logged_in &&
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Profile">Profile</NavLink>
                </li>
            }
            {
              this.props.logged_in &&
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Search">Find a Mentor</NavLink>
                </li>
            }
            {
              this.props.logged_in &&
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Groups">Groups</NavLink>
                </li>
            }

          </ul>
          <ul className="navbar-nav ml-auto">

          <li className="nav-item">
            <NavLink className="nav-link" to="/Login">Login</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/Register">Register</NavLink>
          </li>

          {
            this.props.logged_in &&
              <li className="nav-item">
                <NavLink className="nav-link" to="/Logout">Logout</NavLink>
              </li>
          }

          </ul>






        </div>
      </nav>



      </div>
    );
  }
}

export default Header;
