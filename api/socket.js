module.exports = function(io) {
  io.on('connection', socket => {
    socket.on('new_chat_message', (message, userId) => {
      console.log(message, userId);
      io.emit('receive_message', message, userId);
    });
  });
};
