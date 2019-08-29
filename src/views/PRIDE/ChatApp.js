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
        instanceLocator: "v1:us1:112ea93e-0277-4a7d-9bd9-8426cadc2081",
        userId: this.props.currentId,
        tokenProvider: new TokenProvider({
            url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/112ea93e-0277-4a7d-9bd9-8426cadc2081/token"
        })
    })

  chatManager
      .connect()
      .then(currentUser => {
          this.setState({ currentUser: currentUser })
          return currentUser.subscribeToRoom({
              roomId: "b48654cb-5a61-4f4f-b2f1-19c949f33c63",
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
