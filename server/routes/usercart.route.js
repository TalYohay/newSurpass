const express = require('express');
const orderRoute = express.Router();
let userCart = require('../models/userCart');
const mongoose = require("mongoose");
let Product = require('../models/Product');
let User = require('../models/user');
const verify = require('./verifyToken')
const userCartRoute = express.Router();


//create cart
userCartRoute.route('/').post((req, res) =>{

    Product.find({_id:req.body.orderItems})
    //.map((prod)=>prod._id) if needed
    // .select('product')
    .populate('Product')
    .then(products => {
        if(!products || !products.length){
            return res.status(404).json({
                message: "product not found"
            });
        }

        for(let prod of products){
            const reqProduct = req.body.orderItems.find((orderItem)=>orderItem._id === prod._id.toString());
            prod.product_Quantity = reqProduct.product_Quantity;
            prod.product_Price *= prod.product_Quantity;
        }

        const cart = new userCart({
            _id: new mongoose.Types.ObjectId(),
            UserId:req.user._id,
            cartItems: products,

        });
        return order.save()
        })
        
        .then(result => {
            console.log(result);
            
            return res.status(200).json({
                
                message: "cart was Created",
                
                order:result,
                request:{
                    type:"GET",
                    order_url: "http://localhost:5000/cart/" + result._id
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error:err.message
            });
        });
    
    });    

    module.exports = userCartRoute