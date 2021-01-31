const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('../models/Product').schema

let userCart = new Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    cartItems: [{type:Product, ref: 'Product', required: true}],
    UserId:{type: String},
    createdAt:  {type: Date, default: Date.now}
},
{
    collection: 'userCart'
}

);

module.exports = mongoose.model('userCart', userCart);

