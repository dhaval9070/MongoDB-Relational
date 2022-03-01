const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: String,
    desc: String
}, {
    timestamps: true
});

module.exports = mongoose.model('product', ProductSchema);