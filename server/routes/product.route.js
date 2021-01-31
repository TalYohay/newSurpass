// Node JS server routing
const express = require('express');
const productRouter = express.Router();
let Product = require('../models/Product');
const mongoose = require("mongoose");
require('dotenv').config();

// productRouter.route('/add').post((req, res) => {
//     const product = new Product({
//         _id: new mongoose.Types.ObjectId(),
//         product_Name: req.body.product_Name,
//         product_Description: req.body.product_Description,
//         product_Price: req.body.product_Price,
//         product_Img: req.body.product_Img,
//         product_Quantity: req.body.product_Quantity,
//         id: req.body.id
//     });
//     return product.save()

//     .then(result => {
//             console.log(result);

//             return res.status(200).json({

//                 message: "Product was added",

//                 order: result,
//                 request: {
//                     type: "GET",
//                     product_url: "http://localhost:5000/product/" + result._id
//                 }
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 error: err.message
//             });
//         });
// })

productRouter.post('/add', async(req, res) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        product_Name: req.body.product_Name,
        product_Description: req.body.product_Description,
        product_Price: req.body.product_Price,
        product_Img: req.body.product_Img,
        product_Quantity: req.body.product_Quantity,
        id: req.body.id
    });
    try {
        const savedProduct = await product.save()
        res.status(200).json({
            Message: "Product was created",
            Product: savedProduct,
            request: {
                type: "GET",
                product_url: "http://localhost:5000/api/product/" + product._id
            }
        })
    } catch (err) {
        res.status(400).send(err)

    }
})

// get all products (frontpage)
// productRouter.route('/').get(function(req, res) {
//     Product.find(function(err, products) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(products);
//         }
//     });
// });

productRouter.get('/', async(req, res) => {
    try {
        const products = await Product.find()
        if (products) return res.status(200).send(products);
    } catch {
        res.status(400).send('No products found!')
    }
})



//get product by id
// productRouter.route('/product/:id').get((req, res, next) => {
//     Product.findById(req.params.id, function(err, product) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(product);
//         }
//     });
// });

productRouter.get('/product/:id', async(req, res) => {
    try {
        const foundProduct = await Product.findById({ _id: req.params.id })
        if (foundProduct) return res.status(200).send(foundProduct)
    } catch {
        res.status(400).json({ message: 'Product was not found' })
    }
})



productRouter.delete('/product/:id', async(req, res) => {
    try {
        const deletedProduct = await Product.deleteOne({ _id: req.params.id })
        if (deletedProduct) return res.status(200).send('Product deleted')
    } catch {
        res.status(400).json({ message: 'Product was not found' })
    }

})


module.exports = productRouter;