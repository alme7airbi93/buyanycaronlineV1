var express = require('express');
var router = express.Router();
var firebase = require("firebase");
var dateFormat = require('dateformat');

router.get('/', function(req, res, next) {
    res.redirect('/searchresultpage/list');
});

router.get('/list', function(req, res, next) {
    var vehiclesRef = firebase.database().ref("vehicles");

    vehiclesRef.once('value', function(snapshot) {
        
        var rows = [];

        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            rows.push(childData);
        });

        res.render('searchresultpage/list', {title: "Buyanycaronline : Search Result Page", rows : rows});
    });
});

router.post('/search', function(req, res, next) {

    var vehiclesRef = firebase.database().ref("vehicles");

    console.log(req.body);
    /*var make      = "Hyundai Make-1";   //req.body.make;
    var model     = "E 300";            //req.body.model;
    var fromPrice = 1000;               //req.body.fromPrice
    var toPrice   = 1000000;            //req.body.toPrice
    var fromYear  = 2016;               //req.body.fromYear
    var toYear    = 2019;               //req.body.toYear
    var engine    = 'One';              //req.body.engine*/
    
    var make      = req.body.make;
    var model     = req.body.model;
    var fromPrice = Number(req.body.fromPrice);
    var toPrice   = Number(req.body.toPrice);
    var fromYear  = Number(req.body.fromYear);
    var toYear    = Number(req.body.toYear);
    var engine    = req.body.engine;
    
    vehiclesRef.once('value', function(snapshot) {
        
        var rows = [];

        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            if ((make      == "" || make      == childData.make)   && 
                (model     == "" || model     == childData.model)  && 
                (fromPrice == "" || fromPrice <= childData.price)  &&
                (toPrice   == "" || toPrice   >= childData.price)  &&
                (fromYear  == "" || fromYear  <= childData.year)   &&
                (toYear    == "" || toYear    >= childData.year)   &&
                (engine    == "" || engine    == childData.engine)) 
              rows.push(childData);
        });

        res.render('searchresultpage/list', {title: 'Buyanycaronline : Search Resutl Page', rows : rows});
    });
    
});

module.exports = router;
