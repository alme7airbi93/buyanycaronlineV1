var express = require('express');
var router = express.Router();
var firebase = require("firebase");
var dateFormat = require('dateformat');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Buyanycaronline' });
});

var config = {
    apiKey: "AIzaSyB7IAjdsna6Rms_GXT_mQ46I8cbh6wnSyQ",
    authDomain: "caronline-daf98.firebaseapp.com",
    databaseURL: "https://caronline-daf98.firebaseio.com",
    projectId: "caronline-daf98",
    storageBucket: "caronline-daf98.appspot.com",
    messagingSenderId: "631041197933",
    appId: "1:631041197933:web:eb5ce14f4561415c"
};

firebase.initializeApp(config);

router.post('/search', function(req, res, next) {

    var vehiclesRef = firebase.database().ref("vehicles");

    console.log(req.body);
    /*var make      = "Hyundai Make-1"; //req.body.make;
    var model     = "E 300";            //req.body.model;
    var year      = "2019";             //req.body.year;
    var fromPrice = 1000;               //req.body.fromPrice
    var toPrice   = 1000000;            //req.body.toPrice
    var fromYear  = 2016;               //req.body.fromYear
    var toYear    = 2019;               //req.body.toYear
    var seller    = 'no field';         //req.body.seller
    var engine    = 'One';              //req.body.engine
    var city      = 'no field';         //req.body.city
    var color     = 'Red';              //req.body.color
    var trans     = 'Automatic';        //req.body.trans
    var fuel      = 'Gasoline';         //req.body.fuel
    var condition = 'no field';         //req.body.condition*/
    
    var make      = req.body.make;
    var model     = req.body.model;
    var year      = req.body.year;
    var fromPrice = Number(req.body.fromPrice);
    var toPrice   = Number(req.body.toPrice);
    var fromYear  = Number(req.body.fromYear);
    var toYear    = Number(req.body.toYear);
    var seller    = req.body.seller;
    var engine    = req.body.engine;
    var city      = req.body.city;
    var color     = req.body.color;
    var trans     = req.body.trans;
    var fuel      = req.body.fuel;
    var condition = req.body.condition;

    vehiclesRef.once('value', function(snapshot) {
        
        var rows = [];

        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            if ((make      == "" || make      == childData.make)   && 
                (model     == "" || model     == childData.model)  && 
                //(year      == "" || year      == childData.year)   &&
                (fromPrice == "" || fromPrice <= childData.price)  &&
                (toPrice   == "" || toPrice   >= childData.price)  &&
                (fromYear  == "" || fromYear  <= childData.year)   &&
                (toYear    == "" || toYear    >= childData.year)   &&
                (seller    == "" || seller    == childData.seller) && 
                (engine    == "" || engine    == childData.engine) && 
                (city      == "" || city      == childData.city)   && 
                (color     == "" || color     == childData.color)  && 
                (trans     == "" || trans     == childData.trans)  && 
                (fuel      == "" || fuel      == childData.fuel)   && 
                (condition == "" || condition == childData.condition))
              rows.push(childData);
        });

        res.render('searchresultpage/list', {title: 'Buyanycaronline : Search Result Page', rows : rows});
    });
    
});

module.exports = router;
