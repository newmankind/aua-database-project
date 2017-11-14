var models = require('../db');
var express = require('express');
var router = express.Router();

router.post('/create', function (req, res, next) {
  models.user.create({
    username: req.body.username,
    id: req.params.user_id
  }).then(function () {
    res.redirect('/');
  });
});

router.get('/:user_id/destroy', function (req, res, next) {
  models.user.destroy({
    where: {
      id: req.params.user_id
    }
  }).then(function () {
    res.redirect('/');
  });
});

module.exports = router;