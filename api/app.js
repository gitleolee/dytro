const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '5mb' }));

// routers
app.use('/users', require('./controllers/users'));
app.use('/posts', require('./controllers/posts'));
app.use('/articles', require('./controllers/articles'));

module.exports = app;
