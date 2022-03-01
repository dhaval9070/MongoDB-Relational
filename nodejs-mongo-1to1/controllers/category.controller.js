const Category = require('../models/category.model.js');
// category
// Create and Save a new Category
exports.create = async (req, res) => {
    try{
        const category = await Category.create(req.body);
        res.send(category);
    }catch(error){
        res.status(400).send({error: error.message});
    }
};

// Retrieve and return all categorys from the database.
//get all record of categorys
exports.findAll = async (req, res) => {
    try{
        const categorys = await  Category.find().populate('product');
        res.send(categorys);
    }catch(error){
        res.status(400).send({error: error.message});
    }
};

// Find a single category with a noteId
exports.findOne = async (req, res) => {
    try{
        const categorys = await Category.findById(req.params.id);
        res.send(categorys);
    }catch(error){
        res.status(400).send({error: error.message});
    }
};

// Update a category identified by the noteId in the request
exports.update = async (req, res) => {
    try{
        // const category = await Category.findById(req.params.id);
        // category.title = req.body.title;
        // category.content = req.body.content;
        // await category.save();
        const category = await Category.updateOne({_id: req.params.id},req.body);
        res.send(category);
    }catch(error){
        res.status(400).send({error: error.message});
    }
};

// Delete a category with the specified noteId in the request
exports.delete = async (req, res) => {
    try{
        const category = await Category.deleteOne({_id: req.params.id});
        res.send(category);
    }catch(error){
        res.status(400).send({error: error.message});
    }
};