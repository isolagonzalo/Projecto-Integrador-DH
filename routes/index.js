var express = require('express');
var controller = require('../controllers/controller')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
/*
router.get('/', controller.index )
*/
module.exports = router;
