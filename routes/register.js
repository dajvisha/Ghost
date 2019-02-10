var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');

var international = require('../resources/international');

var labels = international.labels[international.language];
const saltRounds = 10;

/* POST dash. */
router.get('/', function(req, res, next) {
  res.render('register', { register_form: labels.register_form });
});

router.post('/', function(req, res, next) {
  req.checkBody('name', labels.register_form.username_empty_error).notEmpty();
  req.checkBody('email', labels.register_form.email_invalid_error).isEmail();
  req.checkBody('pass', labels.register_form.pass_length_error).len(8, 100);
  req.checkBody('passconf', labels.register_form.pass_match_error).equals(req.body.pass);

  var errors = req.validationErrors();

  if (errors) {
    res.render('register', { register_form: labels.register_form, errors: errors });
  } else {
    var firebase = req.app.get('firebase');
    var bcrypt = req.app.get('bcrypt');

    var name = req.body.name;
    var email = req.body.email;
    var pass = req.body.pass;
  
    bcrypt.hash(pass, saltRounds, function(err, pass_hash) {
      firebase.database().ref('/Users/' + name).set({
        name: name,
        email: email, 
        pass: pass_hash
      });
    });
  
    res.render('register', { register_form: labels.register_form });
  }

});

module.exports = router;
