var express = require('express');
var router = express.Router();
var firebase = require("firebase");
var dateFormat = require('dateformat');

/*router.get('/', function(req, res, next) {
    res.redirect('/vehicledetails/list/');
});*/

router.get('/list/:id', function(req, res, next) {

    firebase.database().ref('vehicles/' + req.params.id).once('value', function(snapshot) {
        var childData = snapshot.val();
        
        childData.id = snapshot.key;
        console.log(childData);
        res.render('vehicledetails/list', {title : 'Buyanycaronline : Vehicle Details', row: childData});
    });

});

module.exports = router;
