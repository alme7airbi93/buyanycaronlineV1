module.exports = (app) => {
    const vehicles = require('./vehicle.controller');

    // Create a new Vehicle
    app.post('/vehicles', vehicles.create);

    // Retrieve all Vehicles
    app.get('/vehicles', vehicles.findAll);

    // Retrieve a single Vehicle with id
    app.get('/vehicles/:id', vehicles.findOne);

    // Update a Vehicle with id
    app.put('/vehicles/:id', vehicles.update);

    // Delete a Vehicle with id
    app.delete('/vehicles/:id', vehicles.delete);

    // Delete a Vehicle with Ad id
    app.delete('/vehicles/ad/:id', vehicles.deleteByAdId);
}