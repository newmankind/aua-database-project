const models = require('../db');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await models.user.findAll({
      attributes: ['id', 'username'],
    });

    res.render('index', {
      title: 'Express',
      users,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
