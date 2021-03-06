import React, { Component } from 'react';
import request from 'axios';
import { URL } from '../../constants/URL';
import { socket } from '../../helpers/requestHelpers';
import { css } from 'emotion';
import PropTypes from 'prop-types';
import Bounce from 'react-reveal/Bounce';
import { changeStringToEmojis } from '../../helpers/stringHelper';

export default class Chat extends Component {
  mounted = false;

  static propTypes = {
    username: PropTypes.string,
    userId: PropTypes.number
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
    socket.on('receive_message', (message, userId, username) => {
      this.addMessage(message, userId, username);
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { messages, input } = this.state;
    if (!this.props.username) {
      return (
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          `}
        >
          <h1>You are not logged in! Login to chat!</h1>
        </div>
      );
    }
    return (
      <div>
        <Bounce left>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              color: gray;
              font-size: 2.4rem;
            `}
          >
            Chat Starts Here!
          </div>
          <div id="chatlogs">
            <div>
              {messages.map((message, index) => (
                <div key={message.id}>
                  <img
                    src="images/profile.png"
                    style={{
                      height: '4.8rem',
                      width: '4.8rem',
                      borderRadius: '50%'
                    }}
                  />
                  <strong
                    className={css`
                      font-size: 1.21rem;
                      color: gray;
                    `}
                  >
                    {message.username}
                  </strong>
                  <div
                    className={css`
                      font-size: 1.2rem;
                      color: black;
                      margin-top: 0.1rem;
                      margin-bottom: 0.75rem;
                    `}
                  >
                    {changeStringToEmojis(message.message)}
                  </div>
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
        </Bounce>
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
    if (input === '') {
      return;
    }
    let flag = false;
    for (let index = 0; index < input.length; index++) {
      if (input[index] !== ' ') {
        flag = true;
      }
    }
    if (!flag) {
      return;
    }
    socket.emit('new_chat_message', input, userId, this.props.username);
    this.setState({ currentId: data.messageId, input: '' });
  };
  addMessage = (pmessage, userId, username) => {
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
