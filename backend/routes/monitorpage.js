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

});

module.exports = router;
