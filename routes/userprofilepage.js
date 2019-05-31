var express = require('express');
var router = express.Router();
var firebase = require("firebase");
var dateFormat = require('dateformat');

router.get('/', function(req, res, next) {
    res.redirect('/userprofilepage/list/0');
});
      
router.get('/list/:userid', function(req, res, next) {

    var usersRef = firebase.database().ref("users");

    /*usersRef.orderByChild('id').equalTo(req.params.userid).once('value', function(snapshot) {
        var user = "";
        snapshot.forEach(function(childSnapshot) {
            user = childSnapshot.val();
        });*/
    
    usersRef.once('value', function(snapshot) {
        var user = "";

        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            
            if (childData.id == req.params.userid)
                user = childData;
        });

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
        
    });

});

router.post('/updateuser', function(req, res, next) {
    
    var userRef = firebase.database().ref('users/' + req.body.userid);

    var obj = {};

    obj[req.body.fname] = req.body.fvalue;

    userRef.update(obj);
   
});

module.exports = router;