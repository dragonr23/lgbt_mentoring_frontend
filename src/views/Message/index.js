import React, { Component } from 'react';
import './index.css';
import Messages from "./Messages";
import Input from "./Input";

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

class Message extends Component {

  constructor(props) {
  super(props);

  this.names = [];

  this.state = {

    username : '',
    reciever: '',
    chatroom: '',
    messages: [],
    member: {
      username: '',
      color: randomColor(),
    },
    logged_in: false,
    displayname: '',



  }





  this.drone = new window.Scaledrone("RMFekT0a3dimleu7", {
    data: this.state.member
  });
  this.drone.on('open', error => {
    if (error) {
      return console.error(error);
    }
    const member = {...this.state.member};
    member.id = this.drone.clientId;
    this.setState({member});

    console.log(member)
    console.log(member.id)
  });

  let username = localStorage.getItem('username')
  let reciever = localStorage.getItem('reciever')

  let chatroom = 'observable-'+username+reciever
  const room = this.drone.subscribe(chatroom);
  room.on('data', (data, member) => {
    const messages = this.state.messages;
    messages.push({member, text: data});
    this.setState({messages});
  });
}

componentWillMount() {
  // get username from local storage

  let username = localStorage.getItem('username')
  let reciever = localStorage.getItem('reciever')
  let member = this.state.member

  this.state.member['username'] = username

  let chatroom = 'observable-'+username+reciever

  this.setState({ username })
  this.setState({ reciever })
  this.setState({ chatroom })
  this.setState({ member })

  this.saveRoom()


  localStorage.setItem('logged_in', true)
  localStorage.getItem('logged_in')
  this.props.handleMessage()
}

saveRoom = async() => {


  let room = 'observable-'+localStorage.getItem('username')+localStorage.getItem('reciever');
  let user1 = localStorage.getItem('username');
  let user2 = localStorage.getItem('reciever');
  let URL = 'http://localhost:5000/api/saveroom';

  let response = await fetch(URL, {
    "method": "POST",
    "headers": {
    'Content-Type': "application/json",
    "Room": room,
    "User1": user1,
    "User2": user2,
  }

  });

  let data = await response.json()

  if (data.success) {
    console.log('YAS DEVELOPER');;
  } else if (data.error) {
    alert(`${data.error}`);
  } else {
       alert('Try again sorry!')
     }

   }





  render() {

    localStorage.setItem('logged_in', true)

    console.log(this.state.messages);

    console.log('MEMBER',this.state.member)



    return (
      <div className="App">
        <div className="App-header">
          <h1>Chat between {this.state.username} and {this.state.reciever}</h1>
        </div>
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
          username = {this.state.username}
        />
        <Input
          onSendMessage={this.onSendMessage}
        />
    </div>
  );
}

onSendMessage = (message) => {
  let username = localStorage.getItem('username')
  let reciever = localStorage.getItem('reciever')

  let chatroom = 'observable-'+username+reciever
  this.drone.publish({
    room: chatroom,
    message
  });

  let displayname = localStorage.getItem('username')

  this.setState({displayname})



  console.log(displayname);

  // names.append(displayname)
  //
  // console.log(names);

  this.names.push(displayname)

  console.log('NAMES', this.names);

}


}
export default Message;
