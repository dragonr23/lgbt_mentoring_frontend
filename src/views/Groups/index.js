import React, { Component } from 'react';
import ChatMessage from '../../components/ChatMessage';
import Signup from '../../components/Signup';
import ChatApp from '../../components/ChatApp';
import './index.css';

import { default as Chatkit } from '@pusher/chatkit-server';

const chatkit = new Chatkit({
  instanceLocator: "v1:us1:3aadf12f-272c-4449-851e-697d3b33c60f",
  key: "562db7bf-6e3a-48e4-a3b9-ed4445631342:Odoghs7l34e5Q/ViztIBlF7oLxZ985hKNWVgB2mm9Zo="
})


class Groups extends Component {
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
          view = <ChatApp currentId={this.state.currentId} />
      }
      return (
          <div className="App">
              {view}
          </div>
      );
  }
}
export default Groups;
