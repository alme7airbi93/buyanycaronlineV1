var express = require('express');
var router = express.Router();
var firebase = require("firebase");

router.get('/list/:id', function(req, res, next) {

    var car_id = req.params.id;

    var carsRef = firebase.database().ref('cars/' + car_id);
    
    carsRef.once('value', function(snaps) {
        var car = snaps.val();
        
        var vehiclesRef = firebase.database().ref('vehicles/' + car.vehicle_id);
        
        vehiclesRef.once('value', function(snaps) {
            
            var vehicle = snaps.val();

            car.ad_id       = vehicle.ad_id;
            car.make        = vehicle.make;
            car.model       = vehicle.model;
            car.warrenty    = vehicle.warrenty;
            car.cylinders   = vehicle.cylinders;
            car.condition   = vehicle.condition;
            car.year        = vehicle.year;

            console.log(car);
            
            var adsRef = firebase.database().ref('ads/' + car.ad_id);
        
            adsRef.once('value', function(snaps) {
                var ad = snaps.val();

                car.customer_id     = vehicle.ad_id;
                car.price           = vehicle.price;
                car.title           = vehicle.title;
                car.description     = vehicle.description;
            
                res.json(car);
            });
        });

    });

    /*
    var carsRef = firebase.database().ref('cars/' + car_id);
    var vehiclesRef = firebase.database().ref('vehicles/vehicle_id/' + car_id);
    
    Promise.all([
        carsRef.once('value'),
        vehiclesRef.once('value')
    ]).then(function (snaps) {
        var cars = snaps[0].val();
        var vehicles = snaps[1].val();
        
        console.log(cars);
        console.log(vehicles);

        res.json(vehicles);
    });*/

});

module.exports = router;
