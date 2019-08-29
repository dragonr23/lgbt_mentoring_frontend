import React, {Component} from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import Input from '../../components/Input';
import MessageList from '../../components/MessageList';

class ChatApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentUser: null,
        currentRoom: {users:[]},
        messages: [],
        users: []
    }
  this.addMessage = this.addMessage.bind(this);
}
componentDidMount() {
    const chatManager = new ChatManager({
        instanceLocator: "v1:us1:6beab50a-161f-4fb6-9a10-fa1b479696c1",
        userId: this.props.currentId,
        tokenProvider: new TokenProvider({
            url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/6beab50a-161f-4fb6-9a10-fa1b479696c1/token"
        })
    })

  chatManager
      .connect()
      .then(currentUser => {
          this.setState({ currentUser: currentUser })
          return currentUser.subscribeToRoom({
              roomId: "9553ecee-d51f-47f4-9c6f-e9f38afad85e",
              messageLimit: 100,
              hooks: {
                  onMessage: message => {
                      this.setState({
                          messages: [...this.state.messages, message],
                      })
                  },
              }
          })
      })
      .then(currentRoom => {
          this.setState({
              currentRoom,
              users: currentRoom.userIds
          })
      })
      .catch(error => console.log(error))
  }

addMessage(text) {
  this.state.currentUser.sendMessage({
      text,
      roomId: this.state.currentRoom.id
  })
  .catch(error => console.error('error', error));
}
render() {
  return (
      <div>
          <h2 className="header">Hi There, Ask us anything</h2>
          <MessageList messages={this.state.messages} />
          <Input className="input-field" onSubmit={this.addMessage} />
      </div>
  )
}
}
export default ChatApp;
