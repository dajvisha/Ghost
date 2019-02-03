var express = require('express');
var router = express.Router();
var international = require('../resources/international');

var labels = international.labels[international.language];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { login_form: labels.login_form, login_error: req.flash('login_error') });
});

module.exports = router;
