var models = require('../db');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  models.user.findAll({
    attributes: ['id', 'username']
  })
    .then(function (users) {
      res.render('index', {
        title: 'Express',
        users: users
      });
    });
});

module.exports = router;