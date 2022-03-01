const mongoose = require('mongoose');
// const { Schema } = mongoose;
const Schema = mongoose.Schema;
const CategorySchema = mongoose.Schema({
    catogoryname: String,
    catogorydesc: String,
    product: [{ type: Schema.Types.ObjectId, ref: 'product' }]
}, {
    timestamps: true
});


module.exports = mongoose.model('category', CategorySchema);