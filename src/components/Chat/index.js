import React, { Component } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

export default class Chat extends Component {
  static propTypes = {
    username: PropTypes.string
  };
  state = {
    messages: [
      { username: 'Dytro Network', message: 'This is the start of the site' }
    ],
    input: ''
  };

  render() {
    const { username } = this.props;
    const { messages, input } = this.state;
    return (
      <div>
        <p>This is Chat :D</p>
        <div id="chatlogs">
          <div>
            {messages.map((message, index) => (
              <div key={index}>
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
