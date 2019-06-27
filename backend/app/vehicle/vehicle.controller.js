var admin = require("firebase-admin");
var db = admin.firestore();
var date = require("../common/date");

//Create new vehicle
exports.create = (req, res) => {
    // Create a vehicle
    let vehicle = {
        ad_id       : req.body.ad_id,
        make_id     : req.body.make_id, 
        model_id    : req.body.model_id,
        warrenty    : req.body.warrenty,
        cylinders   : req.body.cylinders,
        condition   : req.body.condition,
        year        : req.body.year,
        fueltype    : req.body.fueltype,
        create_at   : date.getDate(),
        update_at   : date.getDate()
    }

    // Save vehicle in the database
    var doc = db.collection("vehicles").doc();
    vehicle.id = doc.id;
    
    doc.set(vehicle)
    .then(data => {
        res.json(vehicle);
    }).catch(err => {
        return res.status(500).json({
            message: err.message || "Something wrong while creating the vehicle."
        });
    });
};

// Retrieve all vehicles from the database.
exports.findAll = async (req, res) => {
    
    let vehicles = [];
    
    const vehicleSnaps = await db.collection('vehicles').get();

    vehicleSnaps.forEach((vehicleDoc) => {
        vehicle = vehicleDoc.data();
        vehicles.push(vehicle);
    });

    res.json(vehicles);
};

// Find a single vehicle with a vehicle_id
exports.findOne = async (req, res) => {

    const vehicleSnaps = await db.collection('vehicles').where('id', '==', req.params.id).get();

    vehicleSnaps.forEach((vehicleDoc) => {
        vehicle = vehicleDoc.data();
        res.json(vehicle);
    });

};

// Update a vehicle
exports.update = (req, res) => {
    // Find and update vehicle with the request body
    if (!req.params.id) {  // new
        var doc = db.collection("vehicles").doc();
        vehicle.id = doc.id;
        doc.set(vehicle);
    } else {               // update
        var vehicle = {}
        vehicle[req.body.fname] = req.body.fvalue;
        var doc = db.collection("vehicles").doc(req.params.id);
        doc.update(vehicle)
    }
};

// Delete a Vehicle with the specified id in the request
exports.delete = (req, res) => {
    db.collection('vehicles').doc(req.params.id).delete()
    .then(vehicle => {
        if(!vehicle) {
            return res.status(404).send({
                message: "Vehicle not found with id " + req.params.id
            });
        }
        res.send({message: "Vehicle deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Vehicle not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete vehicle with id " + req.params.id
        });
    });
};

// Delete a Vehicle with the specified id in the request
exports.deleteByAdId = (req, res) => {

    db.collection('vehicles').where('ad_id', '==', req.params.id).get()
    .then(vehicles => {
        if(!vehicles) {
            return res.status(404).send({
                message: "Vehicle not found with id " + req.params.id
            });
        }
        vehicles.forEach(function(vehicle) {
            var id = vehicle.data().id;
            vehicle.ref.delete()
            .then(data=>{
                res.send({message: "Vehicle deleted successfully!", status: "Success", id:id});
            });
        });
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Vehicle not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete vehicle with id " + req.params.id
        });
    });
};

