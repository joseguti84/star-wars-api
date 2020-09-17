const planets = require('../controllers/planets');

module.exports = (router) => {
    router
        .param('id', planets.getById)
        .get('/planets', planets.getAll)
        .post('/planets', planets.store)
        .get('/planets/:id', planets.read)
        .put('/planets/:id', planets.update)
        .delete('/planets/:id', planets.delete)
};
