import React, { Component } from 'react';
import request from 'axios';
import { URL } from '../../constants';
import { socket } from '../../helpers/requestHelpers';
import { css } from 'emotion';
import PropTypes from 'prop-types';

export default class Chat extends Component {
  mounted = false;

  static propTypes = {
    username: PropTypes.string
  };

  state = {
    messages: [],
    input: '',
    currentId: 0
  };

  async componentDidMount() {
    this.mounted = true;
    try {
      const { data: messages } = await request.get(`${URL}/posts`);
      if (this.mounted) {
        this.setState({ messages: messages });
      }
    } catch (error) {
      console.error(error);
    }
    socket.on('receive_message', (message, userId) => {
      this.addMessage(message, userId);
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { messages, input } = this.state;
    return (
      <div>
        <p>This is Chat :D</p>
        <div id="chatlogs">
          <div>
            {messages.map((message, index) => (
              <div key={message.id}>
                <strong>{message.username}</strong>: {message.message}
              </div>
            ))}
            {/* hmm, mysql? */}
          </div>
        </div>
        <div
          id="Chatting"
          className={css`
            input {
              width: 30%;
              font-size: 1.6rem;
            }
          `}
        >
          <form onSubmit={this.onSubmit}>
            <input
              onChange={event => this.setState({ input: event.target.value })}
              value={input}
              placeholder="Enter a message"
            />
          </form>
        </div>
      </div>
    );
  }
  onSubmit = async event => {
    const { userId } = this.props;
    const { input } = this.state;
    event.preventDefault();
    const { data } = await request.post(`${URL}/posts`, {
      text: input,
      userId: userId
    });
    socket.emit('new_chat_message', input, userId);
    this.setState({ currentId: data.messageId, input: '' });
  };
  addMessage = (pmessage, userId) => {
    const { username } = this.props;
    this.setState({
      messages: this.state.messages.concat({
        id: this.state.currentId,
        message: pmessage,
        userId: userId,
        username: username
      })
    });
  };
}
