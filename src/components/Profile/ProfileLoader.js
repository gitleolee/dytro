import React from 'react';
import PropTypes from 'prop-types';

ProfileLoader.propTypes = {
    id: PropTypes.number,
    pictureId: PropTypes.string
};

export default function ProfileLoader({ id, pictureId }) {
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

    return (
        <div>
            <div>Name: </div>
        </div>
    );
}
