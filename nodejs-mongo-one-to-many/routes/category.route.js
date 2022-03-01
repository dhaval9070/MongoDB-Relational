module.exports = (app) => {
    const controller = require('../controllers/category.controller');

    app.post('/category', controller.create);
    app.get('/categorys', controller.findAll);
    app.get('/category/:id', controller.findOne);
    app.put('/category/:id', controller.update);
    app.delete('/category/:id', controller.delete);
} 