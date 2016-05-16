var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {

	var ipAddress = req.ip;
	var header = req.headers;
	var language = header["accept-language"];
	language = language.split(',')[0];
	var os = header["user-agent"];
	os = os.split('(')[1].split(')')[0];

  res.json({
  	ipAddress: ipAddress,
  	language: language,
  	"operating system": os
  });
 
});

module.exports = router;
