import React, { Component } from 'react';
import './index.css';
import Inbox from '../../components/Inbox'

class Profile extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="http://placehold.it/250x250" alt="Placeholder" className="card-img"/>
              <div className="card-title">Username</div>
              <div className="card-subtitle">Zipcode: </div>
              <div className="card-subtitle">Sexuality: </div>
              <div className="card-subtitle">Gender: </div>
              <div className="card-subtitle">Religion: </div>

            </div>{/* this is the end of card*/}
          </div>{/* this is the end of column1*/}
          <div className="col-md-6">

            <h1 className="card messages">Messages</h1>

            <Inbox/>

          </div> {/* this is the end of column2*/}



          </div> {/* this is the end of the row*/}
      </div>
    );
  }
}

export default Profile;
