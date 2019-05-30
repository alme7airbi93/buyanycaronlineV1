var express = require('express');
var router = express.Router();
var firebase = require("firebase");
var dateFormat = require('dateformat');

router.get('/', function(req, res, next) {
    res.redirect('/newadpage/new');
});

router.get('/new', function(req, res, next) {
    
    res.render('newadpage/new', { title: 'Buyanycaronline : New Ad Page' });
   
});

router.post('/save', function(req, res, next) {
    
    var postData = req.body;
    if (!postData.id) {
        postData.id = firebase.database().ref().child('vehicles').push().key;
    }

    postData.price = "130,000 USD";
    postData.year = "2017";
    postData.makedate = "7th January 2018";
    console.log(postData);
    postData.img1 = "/uploads/" + postData.id + "-1.jpg";
    postData.img2 = "/uploads/" + postData.id + "-2.jpg";
    postData.img3 = "/uploads/" + postData.id + "-3.jpg";
    postData.img4 = "/uploads/" + postData.id + "-4.jpg";
    
    postData.visit = "5";
    
    console.log(postData);
    
    firebase.database().ref('vehicles/' + req.body.id).set(req.body);
   
});

router.post('/upload', function(req, res, next) {
    
    console.log(req.body);
   
});

module.exports = router;
