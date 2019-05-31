var express = require('express');
var router = express.Router();
var firebase = require("firebase");
var dateFormat = require('dateformat');

router.get('/', function(req, res, next) {
    res.redirect('/monitorpage/list');
});

router.get('/list', function(req, res, next) {

    //req.query.id = '-Lg0ae0f-ovBtrTVPDIH';

    //firebase.database().ref('vehicles/' + req.query.id).once('value', function(snapshot) {
    var id = '-Lg0ae0f-ovBtrTVPDIH';

    firebase.database().ref('vehicles/' + id).once('value', function(snapshot) {
        var childData = snapshot.val();
        
        //childData.id = snapshot.key;
        console.log(childData);
        res.render('monitorpage/list', {title : 'Buyanycaronline : Monitor Page', row: childData});
    });

    /*var usersRef = firebase.database().ref("users");

    firebase.database().ref("users/" + req.params.userid).once('value', function(snapshot) {
        var user = snapshot.val();

        var vehiclesRef = firebase.database().ref("vehicles");
        
        vehiclesRef.once('value', function(snapshot2) {
        
            var rows = [];
    
            snapshot2.forEach(function(childSnapshot2) {
                var childData2 = childSnapshot2.val();
                
                if (childData2.userid == req.params.userid)
                    rows.push(childData2);
            });
    
            console.log(user);
            res.render('userprofilepage/list', {title: "Buyanycaronline : User Profile Page", user : user, rows : rows });
            
        });
        
    });*/

});

module.exports = router;
