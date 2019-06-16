const admin     = require('firebase-admin');
const jwt       = require('jsonwebtoken');
const bcrypt    = require('bcryptjs');
const config    = require('./config.json');
const date      = require('./date');
const db        = admin.firestore();

const billingInfo = require('./billinginfo.controller');

//Create new user
exports.create = async (req, res) => {

    // Request validation
    if(!req.body) {
        res.status(400).send({
            message: "User content can not be empty"
        });
    }

    if(req.body.username == 'aa') {
        res.status(400).send({
            message:  'Username "' + req.body.username + '" is already taken'
        }); return;
    }

    let billinginfo = await billingInfo.create();
    
    // Create a user
    let user = {
        username        : req.body.username,
        password        : bcrypt.hashSync(req.body.password, 10), 
        billinginfo_id  : billinginfo.id,
        message_id      : '',
        type            : 'USER',
        create_at       : date.getDate(),
        update_at       : date.getDate()
    }

    // Save user in the database
    let doc = db.collection("users").doc();
    user.id = doc.id;
    console.log(user);
    
    doc.set(user)
        .then(data => {
            const token = jwt.sign({ sub: user.id }, config.secret);
            user.token = token;
            res.json(user);
        }).catch(err => {
            res.status(500).json({
                message: err.message || "Something wrong while creating the user."
            });
        });
};

// Retrieve all users from the database.
exports.findAll = (req, res) => {
    
    db.collection('users').get()
        .then((snapshot) => {
            let users = [];
            snapshot.forEach((doc) => {
                users.push(doc.data());
            });
            res.json(users);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Something wrong while retrieving users."
            });
        });
};

// Find a single user with a user id
exports.findOne = (req, res) => {

    // Request validation
    if(!req.body) {
        res.status(400).send({
            message: "User content can not be empty"
        });
    }
    
    db.collection('users').doc(req.params.id).get()
        .then((doc) => {
            let user = doc.data();
            res.json(user);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Something wrong while retrieving user with id."
            });
        });     
};

// Update a user with a user id
exports.update2 = (req, res) => {
    
    // Request validation
    if(!req.body) {
        res.status(400).send({
            message: "User content can not be empty"
        });
    }

    let user = req.body;
    user.password = bcrypt.hashSync(user.password, 10);

    let doc = db.collection("users").doc(req.params.id);
    doc.update(user)
        .then(data => {
            if(!data) {
                res.status(404).send({
                    message: "User not found with id " + req.params.id
                });
            }
            res.send({message: "User updated successfully!"});
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Could not delete user with id " + req.params.id
            });
        });
};

// Update a user with a field name
exports.update = (req, res) => {
    
    // Request validation
    if(!req.body) {
        res.status(400).send({
            message: "User content can not be empty"
        });
    }

    let user = {}
    user[req.body.fname] = req.body.fvalue;

    if(req.body.fname == 'password')
        user[req.body.fname] = bcrypt.hashSync(req.body.fvalue, 10);

    let doc = db.collection("users").doc(req.params.id);
    doc.update(user)
        .then(data => {
            if(!data) {
                res.status(404).send({
                    message: "User not found with id " + req.params.id
                });
            }
            res.send({message: "User updated successfully!"});
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Could not delete user with id " + req.params.id
            });
        });
};

// Delete a user with a user id in the request
exports.delete = (req, res) => {

    // Request validation
    if(!req.body) {
        res.status(400).send({
            message: "User content can not be empty"
        });
    }

    db.collection('users').doc(req.params.id).delete()
        .then(data => {
            if(!data) {
                res.status(404).send({
                    message: "User not found with id " + req.params.id
                });
            }
            res.send({message: "User deleted successfully!"});
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Could not delete user with id " + req.params.id
            });
        });

};

// Authenticate a user with user name and password
exports.authenticate = (req, res) => {

    // Request validation
    if(!req.body) {
        res.status(400).send({
            message: "User content can not be empty"
        });
    }
    
    let username = req.body.username;
    let password = req.body.password;

    db.collection('users')
        .where('username', '==', username).get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                let user = doc.data();
                if (user && bcrypt.compareSync(password, user.password)) {
                    const token = jwt.sign({ sub:user.id }, config.secret);
                    user.token = token;
                    res.json(user);
                }
                res.json(user);
            });
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Something wrong while retrieving users with name."
            });
        });
}


/*
// Retrieve all users from the database.
exports.findAll = async (req, res) => {
    
    let users = [];
    
    const userSnaps = await db.collection('users').get();

    let userArray = [];
    userSnaps.forEach(function(doc) {userArray.push(doc);});
    
    for(const userDoc of userArray) {
        
        let user = userDoc.data();

        const billngInfoSnaps = await db.collection('billinginfos').where('id', '==', user.billinginfo_id).get();
        
        billngInfoSnaps.forEach((billngInfoDoc) => {
            Object.assign(user, billngInfoDoc.data());
        });

        users.push(user);
    }

    res.json(users);
};

// Find a single user with a user_id
exports.findOne = async (req, res) => {

    const userSnaps = await db.collection('users').where('id', '==', req.params.id).get();

    let userArray = [];
    userSnaps.forEach(function(doc) {userArray.push(doc);});
    
    for(const userDoc of userArray) {
        
        let user = userDoc.data();

        const billngInfoSnaps = await db.collection('billinginfos').where('id', '==', user.billinginfo_id).get();
        
        billngInfoSnaps.forEach((billngInfoDoc) => {
            Object.assign(user, billngInfoDoc.data());
        });

        res.json(user);
    }

};

// Update a user
exports.update = (req, res) => {
    // Find and update user with the request body
    if (!req.params.id) {  // new
        let doc = db.collection("users").doc();
        user.id = doc.id;
        doc.set(user);
    } else {               // update
        let user = {}
        user[req.body.fname] = req.body.fvalue;
        let doc = db.collection("users").doc(req.params.id);
        doc.update(user)
    }
};*/
