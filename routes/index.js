var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('*', function(req, res) {
  res.render('index');
});

router.get('/api/*', function(req, res) {
  switch(req) {
    // route to the correct API function here
    default:
      res.json({data: 'dummyData'});
      break;
  }
});

module.exports = router;
