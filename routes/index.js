var express = require('express');
var router = express.Router();

var site_lang = 'es';

var login_form = {
  'es': {
    title_label: 'INICIAR',
    username_label: 'Usuario',
    password_label: 'Contraseña',
    login_button: 'Entrar'
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { login_form: login_form[site_lang], login_error: req.flash('login-error') });
});

module.exports = router;
