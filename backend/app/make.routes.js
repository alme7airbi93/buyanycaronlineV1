module.exports = (app) => {
    const makes = require('./make.controller');

    // Retrieve all Makes
    app.get('/makes', makes.findAll);

    // Retrieve a single Make with id
    app.get('/makes/:id', makes.findOne);
}