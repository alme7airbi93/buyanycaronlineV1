var express = require('express');
var router = express.Router();
//var firebase = require("firebase");
var dateFormat = require('dateformat');

router.get('/', function(req, res, next) {
    res.redirect('/monitorpage/list');
});
      
router.get('/list', function(req, res, next) {
    res.render('monitorpage/list', { title: 'Buyanycaronline : Monitor Page' });
});

module.exports = router;