const models = require('../db');
const express = require('express');

const router = express.Router();

router.post('/create', async (req, res) => {
  try {
    await models.user.create({
      username: req.body.username,
      id: req.params.user_id,
    });
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
});

router.get('/:user_id/destroy', async (req, res) => {
  try {
    await models.user.destroy({
      where: {
        id: req.params.user_id,
      },
    });
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
