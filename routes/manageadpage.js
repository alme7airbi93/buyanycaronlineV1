var express = require('express');
var router = express.Router();
var firebase = require("firebase");
var dateFormat = require('dateformat');

/*router.get('/', function(req, res, next) {
    res.redirect('/manageadpage/list/1');
});*/

router.get('/list/:ad_id', function(req, res, next) {
   
    var vehiclesRef = firebase.database().ref("vehicles");
    
    vehiclesRef.once('value', function(snapshot) {
    
        var row;

        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            
            if (childData.id == req.params.ad_id)
                row = childData;
        });

        console.log(row);
        res.render('manageadpage/list', {title: "Buyanycaronline : Manage Ad Page", row : row });
        
    });
   
});

router.post('/updatead', function(req, res, next) {
    
    var userRef = firebase.database().ref('vehicles/' + req.body.ad_id);

    console.log(req.body);
    var obj = {};

    obj[req.body.fname] = req.body.fvalue;

    userRef.update(obj);
   
});

module.exports = router;