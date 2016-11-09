var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Let\'s ride! - Biker\'s meeting companion'
  });

});

module.exports = router;
