import React, { Component } from 'react';
import './index.css';
import Inbox from '../../components/Inbox'

class Profile extends Component {

  constructor() {
  super();

  this.state = {
    'data': [],
    'rooms':[],


  }
}

getRoom = async() => {

  // let user1 = localStorage.getItem('username');
  // let user2 = 'guy';
  let user1 = localStorage.getItem('username')

  let URL = 'http://127.0.0.1:5000/api/retrieveroom'

  let response = await fetch(URL, {
    "method": "GET",
    "headers": {
      'Content-Type': "application/json",
      "User1": user1,
      // "User2": user2

    }
  });

function oldMessage(item1, item2) {
  localStorage.setItem('oldreciever', item1)
  localStorage.setItem('observableroom', item2)
}

  let rooms = await response.json()
  rooms = rooms.rooms;
  this.setState({ rooms : rooms })

  console.log(this.state.rooms)

  if (this.state.rooms == undefined) {
    // let user2 = localStorage.getItem('username');
    let user2 = localStorage.getItem('username')

    let response = await fetch(URL, {
      "method": "GET",
      "headers": {
        'Content-Type': "application/json",
        "User2": user2,
        // "User2": user2

      }

    });

    let rooms = await response.json()
    rooms = rooms.rooms;
    this.setState({ rooms : rooms })
  }

}

getMentors = async() => {



  let username = localStorage.getItem('username');




  let URL = 'https://lgbt-mentors-backend.herokuapp.com/api/retrieve';

  console.log(URL);

  let response = await fetch(URL, {
    "method": "GET",
    "headers": {
    'Content-Type': "application/json",
    "Username": username,


  }

  });
  let data = await response.json()
  data = data.users;
  this.setState({ data : data })

}

componentWillMount() {



  this.getMentors()
  this.getRoom()
}

  render() {
    console.log(this.state.data)
    console.log(this.state.rooms)
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">


            {this.state.data &&
              this.state.data.map( user =>

              <div className="card">

                <img src="http://placehold.it/250x250" alt="Placeholder" className="card-img"/>
                <div className="card-title"><b>{user.username}</b></div>
                <div className="card-subtitle"> City: {user.zipcode} </div>
                <div className="card-subtitle">Sexuality: {user.sexuality} </div>
                <div className="card-subtitle">Gender: {user.gender}</div>
                <div className="card-subtitle">Religion: {user.religion}</div>

              </div>
            )}





          </div>{/* this is the end of column1*/}
          <div className="col-md-6">

            <h1 className="card messages">Messages</h1>

            <Inbox rooms = {this.state.rooms} oldMessage={this.old}/>

          </div> {/* this is the end of column2*/}



          </div> {/* this is the end of the row*/}
      </div>
    );
  }
}

export default Profile;
