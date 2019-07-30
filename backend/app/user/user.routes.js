module.exports = (app) => {
    const users = require('./user.controller');

    // Create a new User
    app.post('/users', users.create);

    // Authenticate a User
    app.post('/users/authenticate', users.authenticate);
    
    // Retrieve all Users
    app.get('/users', users.findAll);

    // Retrieve a single User with id
    app.get('/users/:id', users.findOne);

    // Update a User with id
    app.put('/users/:id', users.update);

    // Update a User with id
    app.put('/users2/:id', users.update2);

    // Delete a User with id
    app.delete('/users/:id', users.delete);
}