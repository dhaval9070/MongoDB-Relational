module.exports = (app) => {
    const controller = require('../controllers/product.controller');

    app.post('/product', controller.create);
    app.get('/products', controller.findAll);
    app.get('/product/:id', controller.findOne);
    app.put('/product/:id', controller.update);
    app.delete('/product/:id', controller.delete);
} 