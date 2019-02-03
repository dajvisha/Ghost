var express = require('express');
var router = express.Router();

/* POST dash. */
router.post('/', function(req, res, next) {
    if (req.body.name) {
        res.redirect('/dash');
    }
    res.redirect('/');
});

module.exports = router;
