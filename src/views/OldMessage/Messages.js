import {Component} from "react";
import React from "react";

class Messages extends Component {
  render() {
    const {messages} = this.props;
    return (
      <ul className="Messages-list">
        {messages.map(m => this.renderMessage(m))}
      </ul>
    );
  }

  renderMessage(message) {

    const {member, text} = message;
    const {currentMember} = this.props;
    const messageFromMe = member.id === currentMember.id;
    // const messageFromMe = localStorage.getItem('username') === member.clientData.username;
    const className = messageFromMe ?
      "Messages-message currentMember" : "Messages-message";
    console.log('LOG OF MESSAGE FROM ME', messageFromMe);
    console.log('LOG OF CURRENT MEMBER',currentMember);
    // console.log('CLIENTDATA', member.clientData.username);
    return (
      <li className={className}>
      <span
        className="avatar"

      />
        <div className="Message-content">
          <div className="username">

          </div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }
}

export default Messages;
