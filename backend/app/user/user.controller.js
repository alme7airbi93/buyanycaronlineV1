const admin     = require('firebase-admin');
const jwt       = require('jsonwebtoken');
const bcrypt    = require('bcryptjs');
const config    = require('../common/config.json');
const date      = require('../common/date');
const db        = admin.firestore();

const billingInfo = require('../billinginfo/billinginfo.controller');

//Create new user
exports.create = async (req, res) => {

    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }

    const snaps = await db.collection('users').where('username', '==', req.body.username).get();

    if (snaps._size != 0) {
        return res.status(400).json({
            message: "Username already exists."
        });       
    } else {

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
        
        doc.set(user)
            .then(data => {
                const token = jwt.sign({ sub: user.id }, config.secret);
                user.token = token;
                res.json(user);
            }).catch(err => {
                return res.status(500).json({
                    message: err.message || "Something wrong while creating the user."
                });
            });
    }
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
            return res.status(500).send({
                message: err.message || "Something wrong while retrieving users."
            });
        });
};

// Find a single user with a user id
exports.findOne = (req, res) => {

    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }
    
    db.collection('users').doc(req.params.id).get()
        .then((doc) => {
            let user = doc.data();
            res.json(user);
        })
        .catch((err) => {
            return res.status(500).send({
                message: err.message || "Something wrong while retrieving user with id."
            });
        });     
};

exports.findAllByUserName = async (req, res) => {
    
    let user;
    
    const snaps = await db.collection('users').where('username', '==', req.body.username).get();

    snaps.forEach((doc) => {
        user = doc.data();
        res.json(user);

    });
};

// Update a user with a user id
exports.update2 = (req, res) => {
    
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }

    let user = req.body;
    user.password = bcrypt.hashSync(user.password, 10);

    let doc = db.collection("users").doc(req.params.id);
    doc.update(user)
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.id
                });
            }
            res.send({message: "User updated successfully!"});
        }).catch(err => {
            return res.status(500).send({
                message: err.message || "Could not update user with id " + req.params.id
            });
        });
};

// Update a user with a field name
exports.update = (req, res) => {
    
    // Request validation
    if(!req.body) {
        return res.status(400).send({
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
                return res.status(404).send({
                    message: "User not found with id " + req.params.id
                });
            }
            res.send({message: "User updated successfully!"});
        }).catch(err => {
            return res.status(500).send({
                message: err.message || "Could not update user with id " + req.params.id
            });
        });
};

// Delete a user with a user id in the request
exports.delete = (req, res) => {

    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }

    db.collection('users').doc(req.params.id).delete()
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.id
                });
            }
            res.send({message: "User deleted successfully!"});
        }).catch(err => {
            return res.status(500).send({
                message: err.message || "Could not delete user with id " + req.params.id
            });
        });

};

// Authenticate a user with user name and password
exports.authenticate = async (req, res) => {

    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }
    
    let username = req.body.username;
    let password = req.body.password;

    await db.collection('users')
        .where('username', '==', username).get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                let user = doc.data();
                if (user && bcrypt.compareSync(password, user.password)) {
                    const token = jwt.sign({ sub:user.id }, config.secret);
                    user.token = token;
                    res.json(user);
                } else {
                    return res.status(400).send({
                        message: "The password is incorrect."
                    });
                }
            });
        })
        .catch((err) => {
            return res.status(500).send({
                message: err.message || "Something wrong while retrieving users with name."
            });
        });

    return res.status(400).send({
        message: "The username is incorrect."
    });
}

