var express = require('express');
var router = express.Router();
var international = require('../resources/international');

var labels = international.labels[international.language];

/* POST dash. */
router.get('/', function(req, res, next) {
  res.render('register', { register_form: labels.register_form });
});

module.exports = router;
