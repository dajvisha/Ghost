var express = require('express');
var router = express.Router();
var international = require('../resources/international');

var labels = international.labels[international.language];

/* POST login. */
router.post('/', function (req, res, next) {
    var firebase = req.app.get('firebase');
    var bcrypt = req.app.get('bcrypt');

    var email = req.body.email;
    var pass = req.body.pass;

    var usersInfo = firebase.database().ref('/Users/').once('value').then(function(snapshot) {
        snapshot.forEach(function(child) {
            var user = child.val();
            var userEmail = user.email;
            var userPass = user.pass;

            if (userEmail === email && bcrypt.compareSync(pass, userPass)) {
                res.redirect('/dash');
            }
        });

        req.flash('login_error', labels.login_form.login_error);
        res.redirect('/');
    });
});

module.exports = router;
