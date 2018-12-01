module.exports = function(io) {
  io.on('connection', socket => {
    socket.on('new_chat_message', (message, userId, username) => {
      console.log(message, userId, username);
      io.emit('receive_message', message, userId, username);
    });
  });
};
