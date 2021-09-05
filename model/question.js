const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
    title: String,
    desc: String
});

module.exports = mongoose.model('Question', productSchema);
