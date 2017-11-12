var models  = require('../db');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
console.log(models.User);
  res.render('index', { title: 'Express' });
});

module.exports = router;
