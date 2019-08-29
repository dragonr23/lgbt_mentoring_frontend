import React, { Component } from 'react';
import ChatMessage from '../../components/ChatMessage';
import Signup from '../../components/Signup';
import ChatApp from './ChatApp';
import './index.css';

import { default as Chatkit } from '@pusher/chatkit-server';

const chatkit = new Chatkit({
  instanceLocator: "v1:us1:6beab50a-161f-4fb6-9a10-fa1b479696c1",
  key: "9a8fb863-16a4-41ff-b6ea-b3194ced5f87:ynKAL/pCPkmCAw/uQtoUWCe6UtGPi1fQ7YpGrT3V34I=",
})


class LGBTANEWYORK extends Component {
  constructor(props) {
      super(props);
      this.state = {
          currentUsername: '',
          currentId: '',
          currentView: 'signup'
      }
      this.changeView = this.changeView.bind(this);
      this.createUser = this.createUser.bind(this);
  }

  createUser(username) {
      chatkit.createUser({
          id: username,
          name: username,
      })
      .then((currentUser) => {
          this.setState({
              currentUsername: username,
              currentId: username,
              currentView: 'chatApp'
          })
      }).catch((err) => {
               if(err.status === 400) {
              this.setState({
                  currentUsername: username,
                  currentId: username,
                  currentView: 'chatApp'
              })
          } else {
              console.log(err.status);
          }
      });
  }

changeView(view) {
    this.setState({
        currentView: view
    })
}

render() {
      let view ='';

      if (this.state.currentView === "ChatMessage") {
          view = <ChatMessage  changeView={this.changeView}/>
      } else if (this.state.currentView === "signup") {
          view = <Signup onSubmit={this.createUser}/>
      } else if (this.state.currentView === "chatApp") {
          view = <ChatApp currentId={this.state.currentId}/>
      }
      return (
          <div className="App">
              {view}
          </div>
      );
  }
}
export default LGBTANEWYORK;
