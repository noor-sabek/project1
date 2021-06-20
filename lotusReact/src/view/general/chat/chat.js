import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './chat.css';
import {Launcher} from 'react-chat-window'

class Demo extends Component {

  constructor() {
    super();
    this.state = {
      messageList: ["Hello"]
    };
  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]

    })
  }

  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'client',
          type: 'text',
          data: { text }
        }]
      })
    }
  }

  render() {
    console.log(this.state.messageList)
    return (<div>
      <Launcher
        agentProfile={{
          teamName: 'Montessori Team',
          imageUrl: '/img/roro.jpeg'
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        showEmoji

      />

    </div>)
  }
}
export default Demo;
