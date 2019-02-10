var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var expressValidator = require('express-validator');
var firebase = require('firebase');

var international = require('../resources/international');

var labels = international.labels[international.language];
const saltRounds = 10;

// configure firebase connection
var config = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  databaseURL: process.env.FB_DATABASE_URL,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID 
};

firebase.initializeApp(config);

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
