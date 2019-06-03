var express = require('express');
var router = express.Router();
//var firebase = require("firebase");
var dateFormat = require('dateformat');

router.get('/', function(req, res, next) {
    res.redirect('/userprofilepage/list');
});
      
router.get('/list', function(req, res, next) {
    res.render('userprofilepage/list', { title: 'Buyanycaronline : User Profile' });
});

module.exports = router;