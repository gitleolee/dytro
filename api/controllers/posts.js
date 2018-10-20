const express = require('express');
const router = express.Router();
const { requireAuth } = require('../auth');
const { poolQuery } = require('../helpers');

router.get('/', async(req, res) => {
  try {
    const messages = await poolQuery(
      `SELECT a.id, a.userId, a.message, b.username FROM posts a JOIN users b ON a.userId = b.id`
    );
    res.send(messages);
  } catch (error) {
    console.error(error);
  }
});

router.post('/', requireAuth, async(req, res) => {
  console.log('came through');
  res.send({ success: true });
});

module.exports = router;
