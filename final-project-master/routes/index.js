var express = require('express');
var router = express.Router();
var halp = require("../halp.js");

/* GET home page. */
router.post('/', function (req, res, next) {
console.log(halp);
      res.json(halp.users);

});

module.exports = router;
