var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/api/*', function(req, res) {
  var data;
  var path = req.path.substr(req.path.indexOf('/api/') + 5);
  switch(path) {
    // route to the correct API function here
    default:
      data = {API_requested_path: path};
      res.json(data);
      break;
  }
});

module.exports = router;
