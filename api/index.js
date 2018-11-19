const app = require('./app');
const socket = require('./socket');
const PORT = 3500;

const http = require('http').Server(app);
const io = require('socket.io')(http);
socket(io);

http.listen(PORT, () => {
  console.log('Server listening to API PORT:', PORT);
});
