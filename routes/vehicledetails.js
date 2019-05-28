var express = require('express');
var router = express.Router();
var firebase = require("firebase");
var dateFormat = require('dateformat');

router.get('/', function(req, res, next) {
    res.redirect('list');
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
      
router.get('/list', function(req, res, next) {
    /*firebase.database().ref('vehicles').orderByKey().once('value', function(snapshot) {
        var rows = [];
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
        
            childData.brdno = childSnapshot.key;
            childData.brddate = dateFormat(childData.brddate, "yyyy-mm-dd");
            rows.push(childData);
        });*/
        //res.render('vehicle_details', {rows: rows});
        res.render('vehicledetails/list', { title: 'Buyanycaronline : Vehicle Details' });
    //});
});

module.exports = router;
