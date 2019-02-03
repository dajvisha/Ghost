var express = require('express');
var router = express.Router();

var site_lang = 'es';

var login_error = {
  'es': { error: 'Usuario o contraseña incorrectos' }
}

/* POST login. */
router.post('/', function(req, res, next) {
    if (req.body.name && req.body.pass) {
        res.redirect('/dash');
    }
    req.flash('login-error', login_error[site_lang].error);
    res.redirect('/');
});

module.exports = router;
