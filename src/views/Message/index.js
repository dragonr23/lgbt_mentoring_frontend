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

  this.state = {

    'username': '',
    'reciever': '',
    'chatroom': '',
    messages: [],
    member: {
      username: '',
      color: randomColor(),
    }


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

    member[username] = username

    let chatroom = username + reciever

    this.setState({ username })
    this.setState({ reciever })
    this.setState({ chatroom })
    this.setState({ member })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Chat between {this.state.username} and {this.state.reciever}</h1>
        </div>
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
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
}

}
export default Message;
