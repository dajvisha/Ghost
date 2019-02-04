var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var international = require('../resources/international');

var labels = international.labels[international.language];
const saltRounds = 10;

/* POST dash. */
router.get('/', function(req, res, next) {
  res.render('register', { register_form: labels.register_form });
});

router.post('/', function(req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var pass = req.body.pass;
  var passconf = req.body.passconf;

  bcrypt.hash(pass, saltRounds, function(err, pass_hash) {
    console.log(pass_hash);
  });

  res.render('register', { register_form: labels.register_form });
});

module.exports = router;
