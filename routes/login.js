var express = require('express');
var router = express.Router();
var international = require('../resources/international');

var labels = international.labels[international.language];

/* POST login. */
router.post('/', function(req, res, next) {
    if (req.body.email && req.body.pass) {
        res.redirect('/dash');
    }
    req.flash('login_error', labels.login_form.login_error);
    res.redirect('/');
});

module.exports = router;
