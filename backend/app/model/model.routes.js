module.exports = (app) => {
    const models = require('./model.controller');

    // Retrieve all Models
    app.get('/models', models.findAll);

    // Retrieve a single Model with id
    app.get('/models/:id', models.findOne);

    // Retrieve a single Model with id
    app.get('/models/makeid/:make_id', models.findAllByMakeId);
}