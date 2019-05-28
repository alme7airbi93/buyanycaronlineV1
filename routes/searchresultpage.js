var express = require('express');
var router = express.Router();
//var firebase = require("firebase");
var dateFormat = require('dateformat');

router.get('/', function(req, res, next) {
    res.redirect('/searchresultpage/list');
});
      
router.get('/list', function(req, res, next) {
    res.render('searchresultpage/list', { title: 'Buyanycaronline : Search Result Page' });
});

module.exports = router;