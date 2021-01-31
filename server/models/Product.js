// define the table structure for mongoDB
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
    product_Name: {
        type: String,
        required: true
    },
    product_Description: {
        type: String,
        required: true
    },
    product_Price: {
        type: Number,
        required: true
    },
    product_Img: {
        type: String,
        required: true
    },
    product_Quantity: {
        type: Number,
        required: true
    },
    id: {
        type: Number
    },
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
}, {
    collection: 'products'
});

module.exports = mongoose.model('Product', Product);