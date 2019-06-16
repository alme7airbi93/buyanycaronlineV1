var admin = require("firebase-admin");
var db = admin.firestore();
var path = require('path');
var date = require("./date");

//Upload a image file
exports.upload = (req, res) => {
    
    let file = req.files.file;
    let ext = path.extname(file.name);
    
    let car_id = req.params.car_id;
    
    db.collection('cars').doc(car_id).get()
    .then((doc) => {
        var data = doc.data();
        
        var imgcount = data.imgcount;
        imgcount++;
        
        var filename = car_id + "-" + imgcount + ext;
        
        file.mv("public/uploads/cars/" + filename, function(err, success) {
            var car = {};
            car.imgcount = imgcount;
            var doc = db.collection("cars").doc(car_id);
            doc.update(car)

            return res.json({success:true, filename:filename});
        });
        
    });

};

//Create new car
exports.create = (req, res) => {
    // Create a car
    console.log(req.body);
    let car = {
        vehicle_id   : req.body.vehicle_id,
        distance     : req.body.distance, 
        bodytype     : req.body.bodytype,
        doors        : req.body.doors,
        features     : req.body.features,
        horsepower   : req.body.horsepower,
        transmission : req.body.transmission,
        color        : req.body.color,
        fueltype     : req.body.fueltype,
        regionalspecs: req.body.regionalspecs,
        imgcount     : req.body.imgcount,
        create_at    : date.getDate(),
        update_at    : date.getDate()
    }

    // Save car in the database
    var doc = db.collection("cars").doc();
    //const increment = db.FieldValue.increment(1);
    
    car.id = doc.id;
    //car.reads = increment;

    /*const increment = firebase.firestore.FieldValue.increment(1);

    // Document reference
    const storyRef = db.collection('stories').doc('hello-world');

    // Update read count
    storyRef.update({ reads: increment });*/

    doc.set(car)
    .then(data => {
        res.json(car);
    }).catch(err => {
        res.status(500).json({
            message: err.message || "Something wrong while creating the car."
        });
    });
};


// Retrieve all cars from the database.
exports.findAll = async (req, res) => {
    
    let cars = [];
    
    const carSnaps = await db.collection('cars').get();

    let carArray = []; 
    carSnaps.forEach(function(doc) {carArray.push(doc);});

    for(const carDoc of carArray) {

        let car = carDoc.data();
        let vehicleSnaps = await db.collection('vehicles').where('id', '==', car.vehicle_id).get();
        
        let vehicleArray = [];
        vehicleSnaps.forEach(function(doc) {vehicleArray.push(doc);});
        
        for(const vehicleDoc of vehicleArray) {

            let vehicle = vehicleDoc.data();
            Object.assign(car, vehicle);

            await Promise.all([
                db.collection('ads').where('id', '==', vehicle.ad_id).get(),
                db.collection('makes').where('id', '==', vehicle.make_id).get(),
                db.collection('models').where('id', '==', vehicle.model_id).get()
            ]).then(function (snaps) {
                
                snaps[0].forEach((adDoc) => {
                    Object.assign(car, adDoc.data());
                });

                snaps[1].forEach((makeDoc) => {
                    car.make = makeDoc.data().value;
                });

                snaps[2].forEach((modelDoc) => {
                    car.model = modelDoc.data().modelvalue;
                });

                cars.push(car);
            });
        }
    }

    res.json(cars);
    
};

// Find a single car with a car_id
exports.findOne = async (req, res) => {

    let car;
    
    const carSnaps = await db.collection('cars').where('id', '==', req.params.id).get();

    let carArray = []; 
    carSnaps.forEach(function(doc) {carArray.push(doc);});

    for(const carDoc of carArray) {

        car = carDoc.data();
        let vehicleSnaps = await db.collection('vehicles').where('id', '==', car.vehicle_id).get();
        
        let vehicleArray = [];
        vehicleSnaps.forEach(function(doc) {vehicleArray.push(doc);});
        
        for(const vehicleDoc of vehicleArray) {

            let vehicle = vehicleDoc.data();
            Object.assign(car, vehicle);

            await Promise.all([
                db.collection('ads').where('id', '==', vehicle.ad_id).get(),
                db.collection('makes').where('id', '==', vehicle.make_id).get(),
                db.collection('models').where('id', '==', vehicle.model_id).get()
            ]).then(function (snaps) {
                
                snaps[0].forEach((adDoc) => {
                    Object.assign(car, adDoc.data());
                });

                snaps[1].forEach((makeDoc) => {
                    car.make = makeDoc.data().value;
                });

                snaps[2].forEach((modelDoc) => {
                    car.model = modelDoc.data().modelvalue;
                });
            });
        }
    }

    res.json(car);
};

// Find a single car with a ad_id
exports.findOneByAdId = async (req, res) => {

    let car = {};
    
    const adSnaps = await db.collection('ads').where('id', '==', req.params.id).get();

    let adArray = []; 
    adSnaps.forEach(function(doc) {adArray.push(doc);});

    for(const adDoc of adArray) {

        ad = adDoc.data();
        Object.assign(car, ad);
        car.ad_id = ad.id;

        let vehicleSnaps = await db.collection('vehicles').where('ad_id', '==', ad.id).get();
        
        let vehicleArray = [];
        vehicleSnaps.forEach(function(doc) {vehicleArray.push(doc);});
        
        for(const vehicleDoc of vehicleArray) {

            let vehicle = vehicleDoc.data();
            Object.assign(car, vehicle);
            car.vehicle_id = vehicle.id;
        
            await Promise.all([
                db.collection('cars').where('vehicle_id', '==', vehicle.id).get(),
                db.collection('makes').where('id', '==', vehicle.make_id).get(),
                db.collection('models').where('id', '==', vehicle.model_id).get()
            ]).then(function (snaps) {
                
                snaps[0].forEach((carDoc) => {
                    Object.assign(car, carDoc.data());
                });

                snaps[1].forEach((makeDoc) => {
                    car.make = makeDoc.data().value;
                });

                snaps[2].forEach((modelDoc) => {
                    car.model = modelDoc.data().modelvalue;
                });
            });
        }
    }

    res.json(car);
};

async function getAllByPrice(req, res, adSnaps) {

    var make_id     = req.body.make;
    var model_id    = req.body.model;
    var fromPrice   = Number(req.body.fromPrice);
    var toPrice     = Number(req.body.toPrice);
    var fromYear    = Number(req.body.fromYear);
    var toYear      = Number(req.body.toYear);
    
    let cars = [];
    
    let adArray = []; 
    adSnaps.forEach(function(doc) {adArray.push(doc);});

    for(const adDoc of adArray) {

        let ad = adDoc.data();
        let car = {};

        Object.assign(car, ad);

        let vehicleSnaps = await db.collection('vehicles').where('ad_id', '==', ad.id).get();
        
        let vehicleArray = [];
        vehicleSnaps.forEach(function(doc) {vehicleArray.push(doc);});
        
        for(const vehicleDoc of vehicleArray) {

            let vehicle = vehicleDoc.data();
            Object.assign(car, vehicle);

            await Promise.all([
                db.collection('cars').where('vehicle_id', '==', vehicle.id).get(),
                db.collection('makes').where('id', '==', vehicle.make_id).get(),
                db.collection('models').where('id', '==', vehicle.model_id).get()
            ]).then(function (snaps) {
                
                snaps[0].forEach((carDoc) => {
                    Object.assign(car, carDoc.data());
                });

                snaps[1].forEach((makeDoc) => {
                    car.make = makeDoc.data().value;
                });

                snaps[2].forEach((modelDoc) => {
                    car.model = modelDoc.data().modelvalue;
                });
                
                if ((make_id   == "" || make_id   == car.make_id )  && 
                    (model_id  == "" || model_id  == car.model_id)  && 
                    (fromPrice == "" || fromPrice <= car.price   )  &&
                    (toPrice   == "" || toPrice   >= car.price   )  &&
                    (fromYear  == "" || fromYear  <= car.year    )  &&
                    (toYear    == "" || toYear    >= car.year    )) 

                cars.push(car);
            });
        }
    }

    res.json(cars);
}

async function getAllByYear(req, res, vehicleSnaps) {

    var make_id     = req.body.make;
    var model_id    = req.body.model;
    var fromPrice   = Number(req.body.fromPrice);
    var toPrice     = Number(req.body.toPrice);
    var fromYear    = Number(req.body.fromYear);
    var toYear      = Number(req.body.toYear);
    
    let cars = [];
    
    let vehicleArray = []; 
    vehicleSnaps.forEach(function(doc) {vehicleArray.push(doc);});

    for(const vehicleDoc of vehicleArray) {

        let vehicle = vehicleDoc.data();
        let car = {};

        Object.assign(car, vehicle);

        let carSnaps = await db.collection('cars').where('vehicle_id', '==', vehicle.id).get();
        
        let carArray = [];
        carSnaps.forEach(function(doc) {carArray.push(doc);});
        
        for(const carDoc of carArray) {

            Object.assign(car, carDoc.data());

            await Promise.all([
                db.collection('ads').where('id', '==', vehicle.ad_id).get(),
                db.collection('makes').where('id', '==', vehicle.make_id).get(),
                db.collection('models').where('id', '==', vehicle.model_id).get()
            ]).then(function (snaps) {
                
                snaps[0].forEach((adDoc) => {
                    Object.assign(car, adDoc.data());
                });

                snaps[1].forEach((makeDoc) => {
                    car.make = makeDoc.data().value;
                });

                snaps[2].forEach((modelDoc) => {
                    car.model = modelDoc.data().modelvalue;
                });
                
                if ((make_id   == "" || make_id   == car.make_id )  && 
                    (model_id  == "" || model_id  == car.model_id)  && 
                    (fromPrice == "" || fromPrice <= car.price   )  &&
                    (toPrice   == "" || toPrice   >= car.price   )  &&
                    (fromYear  == "" || fromYear  <= car.year    )  &&
                    (toYear    == "" || toYear    >= car.year    )) 

                cars.push(car);
            });
        }
    }

    res.json(cars);
}

// Retrieve all searched cars from the database.
exports.findAllOnSearch = async (req, res) => {
    
    console.log(req.body);

    let orderid = req.body.orderid;
    let adSnaps;
    let vehicleSnaps;

    switch(orderid) {
        case 'HIGHEST_PRICE':
            adSnaps = await db.collection('ads').orderBy('price', 'desc').get();
            getAllByPrice(req, res, adSnaps);
            break;
        case 'LOWEST_PRICE':
            adSnaps = await db.collection('ads').orderBy('price', 'asc').get();
            getAllByPrice(req, res, adSnaps);
            break;
        case 'NEWEST':
            vehicleSnaps = await db.collection('vehicles').orderBy('year', 'desc').get();
            getAllByYear(req, res, vehicleSnaps);
            break;
        case 'OLDEST':
            vehicleSnaps = await db.collection('vehicles').orderBy('year', 'asc').get();
            getAllByYear(req, res, vehicleSnaps);
            break;
    }
};

// Retrieve all searched cars from the database.
exports.findAllOnIndex = async (req, res) => {
    
    var motorTable  = req.body.motor;
    var make_id     = req.body.make;
    var model_id    = req.body.model;
    var fromPrice   = Number(req.body.fromPrice);
    var toPrice     = Number(req.body.toPrice);
    var fromYear    = Number(req.body.fromYear);
    var toYear      = Number(req.body.toYear);
    
    let cars = [];
       
    const carSnaps = await db.collection(motorTable).get();

    let carArray = []; 
    carSnaps.forEach(function(doc) {carArray.push(doc);});

    for(const carDoc of carArray) {

        let car = carDoc.data();
        let vehicleSnaps = await db.collection('vehicles').where('id', '==', car.vehicle_id).get();
        
        let vehicleArray = [];
        vehicleSnaps.forEach(function(doc) {vehicleArray.push(doc);});
        
        for(const vehicleDoc of vehicleArray) {

            let vehicle = vehicleDoc.data();
            Object.assign(car, vehicle);

            await Promise.all([
                db.collection('ads').where('id', '==', vehicle.ad_id).get(),
                db.collection('makes').where('id', '==', vehicle.make_id).get(),
                db.collection('models').where('id', '==', vehicle.model_id).get()
            ]).then(function (snaps) {
                
                snaps[0].forEach((adDoc) => {
                    Object.assign(car, adDoc.data());
                });

                snaps[1].forEach((makeDoc) => {
                    car.make = makeDoc.data().value;
                });

                snaps[2].forEach((modelDoc) => {
                    car.model = modelDoc.data().modelvalue;
                });

                if ((make_id   == "" || make_id   == car.make_id )  && 
                    (model_id  == "" || model_id  == car.model_id)  && 
                    (fromPrice == "" || fromPrice <= car.price   )  &&
                    (toPrice   == "" || toPrice   >= car.price   )  &&
                    (fromYear  == "" || fromYear  <= car.year    )  &&
                    (toYear    == "" || toYear    >= car.year    )) 
                cars.push(car);
            });
        }
    }
    console.log(cars);
    res.json(cars);
};

// Update a car
exports.update = (req, res) => {
    // Find and update car with the request body
    if (!req.params.id) {  // new
        var doc = db.collection("cars").doc();
        car.id = doc.id;
        doc.set(car);
    } else {               // update
        var car = {}
        car[req.body.fname] = req.body.fvalue;
        var doc = db.collection("cars").doc(req.params.id);
        doc.update(car)
    }
};

// Delete a Car with the specified id in the request
exports.deleteByVehicleId = (req, res) => {
    
    db.collection('cars').where('vehicle_id', '==', req.params.id).get()
    .then(cars => {
        if(!cars) {
            return res.status(404).send({
                message: "Car not found with id " + req.params.id
            });
        }
        cars.forEach(function(car) {
            var id = car.data().id;
            car.ref.delete()
            .then(data=>{
                res.send({message: "Car deleted successfully!", status: "Success", id:id});
            });
        });
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Car not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete car with id " + req.params.id
        });
    });
};


/*
// Update a car
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Car content can not be empty"
        });
    }

    // Find and update car with the request body
    Car.findByIdAndUpdate(req.params.car_id, {
        title: req.body.title || "No car title", 
        description: req.body.description,
        price: req.body.price,
        company: req.body.company
    }, {new: true})
    .then(car => {
        if(!car) {
            return res.status(404).send({
                message: "Car not found with id " + req.params.car_id
            });
        }
        res.send(car);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Car not found with id " + req.params.car_id
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.car_id
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Car.findByIdAndRemove(req.params.car_id)
    .then(car => {
        if(!car) {
            return res.status(404).send({
                message: "Car not found with id " + req.params.car_id
            });
        }
        res.send({message: "Car deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Car not found with id " + req.params.car_id
            });                
        }
        return res.status(500).send({
            message: "Could not delete car with id " + req.params.car_id
        });
    });
};*/