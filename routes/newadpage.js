var express = require('express');
var router = express.Router();
//var firebase = require("firebase");
var dateFormat = require('dateformat');

router.get('/', function(req, res, next) {
    res.redirect('/newadpage/list');
});
      
router.get('/list', function(req, res, next) {
    res.render('newadpage/list', { title: 'Buyanycaronline : New Add Page' });
});

module.exports = router;