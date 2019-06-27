var admin = require("firebase-admin");

var db = admin.firestore();

// Retrieve all makes from the database.
exports.findAll = async (req, res) => {
    
    let makes = [];
    
    const makeSnaps = await db.collection('makes').get();

    makeSnaps.forEach((makeDoc) => {
        make = makeDoc.data();
        makes.push(make);
    });

    res.json(makes);
};

// Find a single make with a make_id
exports.findOne = async (req, res) => {

    const makeSnaps = await db.collection('makes').where('id', '==', req.params.id).get();

    makeSnaps.forEach((makeDoc) => {
        make = makeDoc.data();
        res.json(make);
    });

};
