var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ 
  	rptEngineTypeList: [ {name : 'n1', label : 'l1'},
  			{name : 'n2', label : 'l2'}]
  });	
});

module.exports = router;
