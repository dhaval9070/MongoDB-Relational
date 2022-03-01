const Product = require('../models/product.model.js');
// product
// Create and Save a new Note
exports.create = async (req, res) => {
    // Note.create(req.body).then( reaponse => {
    //     res.send(reaponse);
    // }, error => {
    //     res.status(400).send({error: 'something is wrong'});
    // } )
    try{
        const product = await Product.create(req.body);
        res.send(product);
    }catch(error){
        res.status(400).send({error: error.message});
    }
};

// Retrieve and return all notes from the database.
//get all record of notes
exports.findAll = async (req, res) => {
    try{
        const products = await Product.find().populate('category');
        res.send(products);
    }catch(error){
        res.status(400).send({error: error.message});
    }
};

// Find a single note with a noteId
exports.findOne = async (req, res) => {
    try{
        const products = await Product.findById(req.params.id);
        res.send(products);
    }catch(error){
        res.status(400).send({error: error.message});
    }
};

// Update a note identified by the noteId in the request
exports.update = async (req, res) => {
    try{
        const product = await Product.updateOne({_id: req.params.id},req.body);
        res.send(product);
    }catch(error){
        res.status(400).send({error: error.message});
    }
};

// Delete a note with the specified noteId in the request
exports.delete = async (req, res) => {
    try{
        const product = await Product.deleteOne({_id: req.params.id});
        res.send(product);
    }catch(error){
        res.status(400).send({error: error.message});
    }
};