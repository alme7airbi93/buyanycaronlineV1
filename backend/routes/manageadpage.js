var express = require('express');
var router = express.Router();
//var firebase = require("firebase");
var dateFormat = require('dateformat');

router.get('/', function(req, res, next) {
    res.redirect('/manageadpage/list');
});
      
router.get('/list', function(req, res, next) {
    res.render('manageadpage/list', { title: 'Buyanycaronline : Manage Ad Page' });
});

module.exports = router;