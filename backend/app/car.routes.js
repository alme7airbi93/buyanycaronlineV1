module.exports = (app) => {
    const cars = require('./car.controller');
    
    // Create a new Car
    app.post('/cars', cars.create);

    // Retrieve all Cars
    app.get('/cars', cars.findAll);

    // Retrieve a single Car with id
    app.get('/cars/:id', cars.findOne);

    // Retrieve a single Car with ad_id
    app.get('/cars/ad/:id', cars.findOneByAdId);

    // Retrieve searched Cars on search page
    app.post('/cars/search', cars.findAllOnSearch);

    // Retrieve searched Cars on index page
    app.post('/cars/search-index', cars.findAllOnIndex);

    // Update a Car with id
    app.put('/cars/:id', cars.update);

    // Delete a Car with id
    //app.delete('/cars/:id', cars.delete);

    // Delete a Car with Vehicle id
    app.delete('/cars/vehicle/:id', cars.deleteByVehicleId);

    // Upload a Car image file
    app.post('/cars/upload/:car_id', cars.upload);

}