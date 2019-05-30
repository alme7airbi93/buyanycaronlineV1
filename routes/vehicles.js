/* 
var express = require('express');
var router = express.Router();
var firebase = require("firebase");
var dateFormat = require('dateformat');

router.get('/', function(req, res, next) {
    res.redirect('/vehicles/list');
});

--------------------------
const db = firebase.database();
    const events = db.child('events');
    const query = events 
                    .orderByChild('name')
                    .equalTo('Firebase Meetup')
                    .limitToFirst(1);
    query.on('value', snap => {

    });

-----------------------
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


------------------------------
rootRef.child(oldName).once('value', function(readSnap) {
     rootRef.child(newName).set(readSnap.val(), function(error) {
         if( !error ) { readSnap.ref().remove(); }
     });
});

-----------------------------
var booksRef = firebase.database().ref('books');
booksRef.child(oldTitle).once('value').then(function(snap) {
  var data = snap.val();
  data.bookInfo.bookTitle = newTitle;
  var update = {};
  update[oldTitle] = null;
  update[newTitle] = data;
  return booksRef.update(update);
});
------------------------------


router.get('/newVehicle', function(req, res, next) {
    
    res.render('vehicles/new', { title: 'Buyanycaronline : New Vehicle' });
   
});

router.post('/save', function(req, res, next) {
    
    var postData = req.body;
    if (!postData.id) {
        postData.id = firebase.database().ref().child('vehicles').push().key;
    }

    firebase.database().ref('vehicles/' + req.body.id).set(req.body);
   
});

router.post('/upload', function(req, res, next) {
    
    console.log(req.body);
   
});

router.get('/listVehicle', function(req, res, next) {
    firebase.database().ref('vehicles').orderByKey().once('value', function(snapshot) {
        var rows = [];
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
        
            rows.push(childData);
        });
        res.render('vehicles/boardList', {rows: rows});
    });
});

     
router.get('/boardList', function(req, res, next) {
    firebase.database().ref('board').orderByKey().once('value', function(snapshot) {
        var rows = [];
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
        
            childData.brdno = childSnapshot.key;
            childData.brddate = dateFormat(childData.brddate, "yyyy-mm-dd");
            rows.push(childData);
        });
        res.render('board1/boardList', {rows: rows});
    });
});

router.get('/boardRead', function(req, res, next) {
    firebase.database().ref('board/'+req.query.brdno).once('value', function(snapshot) {
        var childData = snapshot.val();
        
        childData.brdno = snapshot.key;
        childData.brddate = dateFormat(childData.brddate, "yyyy-mm-dd");
        res.render('board1/boardRead', {row: childData});
    });
});

router.get('/boardForm', function(req,res,next){
    if (!req.query.brdno) {
        res.render('board1/boardForm', {row: ""});
        return;
    }

    firebase.database().ref('board/'+req.query.brdno).once('value', function(snapshot) {
        var childData = snapshot.val();
        
        childData.brdno = snapshot.key;
        res.render('board1/boardForm', {row: childData});
    });
});

router.post('/boardSave', function(req,res,next){
    var postData = req.body;
    if (!postData.brdno) {
        postData.brdno = firebase.database().ref().child('posts').push().key;
        postData.brddate = Date.now();
    } else {
        postData.brddate = Number(postData.brddate); 
    }
    firebase.database().ref('board/' + req.body.brdno).set(req.body);
    //var updates = {};
    //updates['/board/' + postData.brdno] = postData;
    //firebase.database().ref().update(updates);
    
    res.redirect('boardList');
});

router.get('/boardDelete', function(req,res,next){
    firebase.database().ref('board/' + req.query.brdno).remove();
    res.redirect('boardList');
});*/

module.exports = router;
