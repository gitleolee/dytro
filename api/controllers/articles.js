const express = require('express');
const router = express.Router();
const { poolQuery } = require('../helpers');

router.get('/', async(req, res) => {
  try {
    const messages = await poolQuery(
      `SELECT a.id, a.userid, a.content, a.name, b.username FROM articles a JOIN users b ON a.userId = b.id ORDER BY a.id`
    );
    res.send(messages);
  } catch (error) {
    console.error(error);
  }
});

router.post('/', async(req, res) => {
  console.log(req.body);
  await poolQuery(`INSERT INTO articles SET ?`, {
    userid: req.body.userid,
    name: req.body.name,
    content: req.body.content
  });
});

module.exports = router;
