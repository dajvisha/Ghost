var express = require('express');
var router = express.Router();
var international = require('../resources/international');

var labels = international.labels[international.language];

/* POST login. */
router.post('/', function (req, res, next) {
    var email = req.body.email;
    var pass = req.body.pass;

    //var userInfo = firebaseLogin.database().ref('/Users/' + email);
    //console.log(userInfo);
    
    if (req.body.email && req.body.pass) {
        res.redirect('/dash');
    }
    req.flash('login_error', labels.login_form.login_error);
    res.redirect('/');
});

module.exports = router;
