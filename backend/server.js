// get dependencies
const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
    
const app = express();

// parse requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Enable CORS for all HTTP methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(fileUpload());

// default route
/*app.get('/', (req, res) => {
    res.json({"message": "Welcome to Buyanycaronline Product app"});
});*/

// listen on port 3000
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

app.use(express.static('public'))

var admin = require("firebase-admin");

var serviceAccount = require("./anycaronline.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://anycaronline-8bf60.firebaseio.com"
});

require('./app/user.routes')(app);
require('./app/billinginfo.routes')(app);
require('./app/ad.routes')(app);
require('./app/vehicle.routes')(app);
require('./app/car.routes')(app);
require('./app/make.routes')(app);
require('./app/model.routes')(app);


/*var firebase = require("firebase");

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


var firebaseConfig = {
    apiKey: "AIzaSyAgguANrjYnKEnrPpgnloKH_3TKuVLaB7M",
    authDomain: "caronline-72001.firebaseapp.com",
    databaseURL: "https://caronline-72001.firebaseio.com",
    projectId: "caronline-72001",
    storageBucket: "caronline-72001.appspot.com",
    messagingSenderId: "180368139634",
    appId: "1:180368139634:web:4c28fcca26b83f9b"
};

firebase.initializeApp(firebaseConfig);*/

/*<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.1.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCHqt6uD1GRMZ8VBTZDBei6IjyVL0hHir4",
    authDomain: "anycaronline-8bf60.firebaseapp.com",
    databaseURL: "https://anycaronline-8bf60.firebaseio.com",
    projectId: "anycaronline-8bf60",
    storageBucket: "anycaronline-8bf60.appspot.com",
    messagingSenderId: "410856739733",
    appId: "1:410856739733:web:c264a6f7207eb238"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>*/

/*var admin = require("firebase-admin");

var serviceAccount = require("./anycaronline-8bf60-firebase-adminsdk-uftbj-e8c4cb1ef5.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://anycaronline-8bf60.firebaseio.com"
});*/

