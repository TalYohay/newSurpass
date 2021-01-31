const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('../models/Product').schema
const User = require('../models/user').schema
const moment = require('moment'); // require

let Order = new Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email:  {type: String, required: true},
    phone: {type: Number, required: true},
    country: {type: String, required: true},
    city: {type: String, required: true},
    address: {type: String, required: true},
    message:{type: String},
    // orderId:{type:Number, default:Math.floor(Math.random() * 10000000)},
    orderItems: [{type:Product, ref: 'Product', required: true}],
    // cartId: [{
    //     orderItems: [{type:Product, ref: 'Product', required: true}],

    // }],
    
    UserId:{type: String},
    
    createdAt: {
        type: String,
        default:moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a')
    },
},
{
    collection: 'orders'
}

);

module.exports = mongoose.model('Order', Order);

