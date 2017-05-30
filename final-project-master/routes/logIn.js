var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log("login");
  // insert logIn functionality
  // pass the data to the server(POST) and check username and pass
  // resp.json
});

module.exports = router;
