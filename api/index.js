require('dotenv').config();
const app = require('./app');
const socket = require('./socket');
const https = require('https');
const http = require('http');

const lex = require('greenlock-express').create({
  version: 'draft-12',
  server: 'https://acme-v02.api.letsencrypt.org/directory',
  email: 'soy1790@gmail.com',
  agreeTos: true,
  approveDomains: ['api.dytro.net'],
  challenges: {
    'http-01': require('le-challenge-fs').create({
      webrootPath: '/tmp/acme-challenges'
    })
  }
});

const PORT = process.env.PORT || 3500;

const server =
  process.env.NODE_ENV === 'production'
    ? https.createServer(lex.httpsOptions, lex.middleware(app))
    : http.Server(app);

const io = require('socket.io')(server);
socket(io);

server.listen(PORT, function() {
  console.log('Server listening on port:', PORT);
});

if (process.env.NODE_ENV === 'production') {
  require('http')
    .createServer(lex.middleware(require('redirect-https')()))
    .listen(80, function() {
      console.log('Server listening on port:', 80);
    });
}
