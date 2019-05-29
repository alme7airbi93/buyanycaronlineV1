var express = require('express');
var router = express.Router();
var firebase = require("firebase");
var dateFormat = require('dateformat');

router.get('/', function(req, res, next) {
    res.redirect('/searchresultpage/list');
});

router.get('/list', function(req, res, next) {

    //req.query.id = '-Lg0ae0f-ovBtrTVPDIH';
    
    //firebase.database().ref('vehicles/' + req.query.id).once('value', function(snapshot) {
    /*var id = '-Lg0ae0f-ovBtrTVPDIH';

    firebase.database().ref('vehicles/' + id).once('value', function(snapshot) {
        var rows = [];
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
        
            //childData.id = childSnapshot.key;
            rows.push(childData);
        });

        console.log(rows);*/
        res.render('searchresultpage/list', {title : 'Buyanycaronline : Search Result Page'});
    //});

});

module.exports = router;
