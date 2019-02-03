var express = require('express');
var router = express.Router();

/* POST dash. */
router.post('/', function(req, res, next) {
  res.render('dash', { name: req.body.name });
});

module.exports = router;
