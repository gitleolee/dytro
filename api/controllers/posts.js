const express = require('express');
const router = express.Router();
const { poolQuery } = require('../helpers');

router.get('/', async(req, res) => {
  try {
    const messages = await poolQuery(
      `SELECT a.id, a.userId, a.message, b.username FROM posts a JOIN users b ON a.userId = b.id ORDER BY a.id`
    );
    res.send(messages);
  } catch (error) {
    console.error(error);
  }
});

router.post('/', async(req, res) => {
  console.log(req.body);
  const result = await poolQuery(`INSERT INTO posts SET ?`, {
    userId: req.body.userId,
    message: req.body.text
  });
  res.send({
    success: true,
    messageId: result.insertId
  });
});

module.exports = router;
