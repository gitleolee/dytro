const express = require('express');
const router = express.Router();
const {poolQuery} = require('../helpers');

router.get('/', async (req, res) => {
  try {
    const messages = await poolQuery(
      `SELECT a.id, a.userId, a.content, a.name, b.username FROM articles a JOIN users b ON a.userId = b.id ORDER BY a.id`
    );
    res.send(messages);
  } catch (error) {
    console.error(error);
  }
});

router.get('/getdata', async (req, res) => {
  try {
    const [message] = await poolQuery(
      `SELECT a.id, a.userId, a.content, a.name, b.username FROM articles a JOIN users b ON a.userId = b.id WHERE a.id = ? ORDER BY a.id `,
      req.query.postId
    );
    res.send(message);
  } catch (error) {
    console.error(error);
  }
});

router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    await poolQuery(`INSERT INTO articles SET ?`, {
      userId: req.body.userId,
      name: req.body.name,
      content: req.body.content
    });
    res.send({success: true});
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
