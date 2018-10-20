import React, { Component } from 'react';
import PropTypes from 'prop-types';
import request from 'axios';
import { URL } from '../../constants';
import { css } from 'emotion';

export default class Chat extends Component {
  static propTypes = {
    username: PropTypes.string
  };

  mounted = false;

  state = {
    messages: [],
    input: ''
  };

  async componentDidMount() {
    this.mounted = true;
    try {
      const { data: messages } = await request.get(`${URL}/posts`);
      if (this.mounted) this.setState({ messages: messages });
    } catch (error) {
      console.error(error);
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { username } = this.props;
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
          <form
            onSubmit={event => {
              event.preventDefault();

              this.setState(state => {
                return {
                  messages: state.messages.concat(
                    input.length > 0
                      ? [
                          {
                            username: username,
                            message: input
                          }
                        ]
                      : []
                  ),
                  input: ''
                };
              });
            }}
          >
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
}
