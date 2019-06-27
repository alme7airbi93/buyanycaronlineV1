var admin = require("firebase-admin");

var db = admin.firestore();

// Retrieve all models from the database.
exports.findAll = async (req, res) => {
    
    let models = [];
    
    const modelSnaps = await db.collection('models').get();

    modelSnaps.forEach((modelDoc) => {
        model = modelDoc.data();
        models.push(model);
    });

    res.json(models);
};

// Find a single model with a model_id
exports.findOne = async (req, res) => {

    const modelSnaps = await db.collection('models').where('id', '==', req.params.id).get();

    modelSnaps.forEach((modelDoc) => {
        model = modelDoc.data();
        res.json(model);
    });

};

exports.findAllByMakeId = async (req, res) => {
    
    let models = [];
    
    const modelSnaps = await db.collection('models').where('make_id', '==', req.params.make_id).get();

    modelSnaps.forEach((modelDoc) => {
        model = modelDoc.data();
        models.push(model);
    });

    res.json(models);

};
