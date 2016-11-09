var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/api/*', function(req, res) {
  var data;
  var path = req.path.substr(req.path.indexOf('/api/')); //fixme remove /api/
  switch(path) {
    // route to the correct API function here
    default:
      data = {API_requested_path: path};
      res.json(data);
      break;
  }
  res.render('api_ui', {data: data});
});

module.exports = router;
