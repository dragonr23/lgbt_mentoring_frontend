import React, { Component } from 'react';
import './index.css';

class Logout extends Component {

  constructor(props) {
  super(props);



  }

componentWillMount() {


  this.props.handleLogout()
}

  render() {



    localStorage.setItem('logged_in', false)

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1>Come Back Soon!</h1>

            </div>
          </div>
      </div>
    );
  }
}

export default Logout;
