var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
// add an array of users
res.render('index', { title: 'Express', users: ['Mariela', 'Martin', 'Cody', 'Nick'] });
});
module.exports = router;
