const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = mongoose.Schema({
    title: String,
    desc: String,
    category: [{ type: Schema.Types.ObjectId, ref: 'category' }]
}, {
    timestamps: true
});

module.exports = mongoose.model('product', ProductSchema);