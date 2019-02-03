var express = require('express');
var router = express.Router();

/* POST dash. */
router.get('/', function(req, res, next) {
  res.render('dash');
});

module.exports = router;
