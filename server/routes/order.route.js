// Node JS server routing
const express = require('express');
const orderRoute = express.Router();
let OrderDetails = require('../models/OrderDetails');
const mongoose = require("mongoose");
let Product = require('../models/Product');
let User = require('../models/user');
const verify = require('./verifyToken')



//create order
// orderRoute.route('/').post(verify, (req, res) => {

//     Product.find({ _id: req.body.orderItems })
//         //.map((prod)=>prod._id) if needed
//         // .select('product')
//         .populate('Product')
//         .then(products => {
//             if (!products || !products.length) {
//                 return res.status(404).json({
//                     message: "product not found"
//                 });
//             }

//             for (let prod of products) {
//                 const reqProduct = req.body.orderItems.find((orderItem) => orderItem._id === prod._id.toString());
//                 prod.product_Quantity = reqProduct.product_Quantity;
//                 prod.product_Price *= prod.product_Quantity;
//             }

//             const order = new OrderDetails({
//                 _id: new mongoose.Types.ObjectId(),
//                 // orderItems:products,
//                 UserId: req.user._id,
//                 // cartId:{  
//                 // orderItems: products,
//                 // },
//                 orderItems: products,
//                 email: req.body.email,
//                 firstName: req.body.firstName,
//                 lastName: req.body.lastName,
//                 phone: req.body.phone,
//                 address: req.body.address,
//                 country: req.body.country,
//                 city: req.body.city,
//                 message: req.body.message

//             });
//             return order.save()
//         })

//     .then(result => {
//             console.log(result);

//             return res.status(200).json({

//                 message: "Order was Created",

//                 order: result,
//                 request: {
//                     type: "GET",
//                     order_url: "http://localhost:5000/order/" + result._id
//                 }
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 error: err.message
//             });
//         });

// });


orderRoute.post('/', verify, async(req, res) => {
    try {
        const products = await Product.find({ _id: req.body.orderItems })
        if (!products || !products.length) return res.status(404).json({
            message: "product not found"
        });

        for (let prod of products) {
            const reqProduct = await req.body.orderItems.find((orderItem) => orderItem._id === prod._id.toString());
            prod.product_Quantity = reqProduct.product_Quantity;
            prod.product_Price *= prod.product_Quantity;
        }
        const order = new OrderDetails({
            _id: new mongoose.Types.ObjectId(),
            // orderItems:products,
            UserId: req.user._id,
            // cartId:{  
            // orderItems: products,
            // },
            orderItems: products,
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone,
            address: req.body.address,
            country: req.body.country,
            city: req.body.city,
            message: req.body.message
        });
        const savedOrder = await order.save()
        res.status(200).json({
            message: "Order was Created",
            order: savedOrder,
            request: {
                type: "GET",
                order_url: "http://localhost:5000/api/order/" + savedOrder._id
            }
        })

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
})

// get all orders (frontpage)
// orderRoute.route('/').get(function(req, res) {
//     OrderDetails.find()
//         // .select('product')
//         .populate('Product')
//         .exec()
//         .then(orders => {
//             res.status(200).json({
//                 totalOrdersCount: orders.length,
//                 orders: orders.map(order => {
//                     return {
//                         order_id: order._id,
//                         orderDetails: order,
//                         request: {
//                             type: "GET",
//                             order_url: "http://localhost:5000/order/" + order._id
//                         }
//                     }
//                 })
//             })
//         })
//         .catch(err => {
//             res.status(500).json({
//                 error: err.message
//             });
//         });
// });

orderRoute.get('/', async(req, res) => {
    try {
        const allOrders = await OrderDetails.find()
        if (allOrders) return res.status(200).json({
            totalOrdersCount: allOrders.length,
            allOrders: allOrders.map(order => {
                return {
                    order_id: order._id,
                    orderDetails: order,
                    request: {
                        type: "GET",
                        order_url: "http://localhost:5000/api/order/" + order._id
                    }
                }
            })
        })
    } catch {
        res.status(500).send('No Orders!')

    }
})

//get order by id
// orderRoute.get("/:id", (req, res, next) => {
//     OrderDetails.findById(req.params.id)

//       .populate('Product')
//       .exec()
//       .then(order => {
//         if (!order) {
//           return res.status(404).json({
//             message: "Order not found"
//           });
//         }
//             res.status(200).json({
//             message: "Order was fetched",
//           order: order,
//           request: {
//             type: "GET",
//             all_orders_url: "http://localhost:5000/order"
//           }
//         });
//       })
//       .catch(err => {
//         res.status(500).json({
//           error: err
//         });
//       });
//   });


orderRoute.get('/:id', async(req, res) => {
    try {
        const order = await OrderDetails.findById({ _id: req.params.id })
        if (order) return res.status(200).json({
                message: "Order was fetched",
                order: order,
                request: {
                    type: "GET",
                    all_orders_url: "http://localhost:5000/api/order"
                }
            })
            // else {
            //     return res.status(400).send('Order does not exist')
            // }
    } catch {
        res.status(500).json({
            message: 'Order does not exist'
        })
    }
})


//delete order by id
// orderRoute.delete('/:id', (req, res, next) => {
//     OrderDetails.deleteOne({ _id: req.params.id })
//         .exec()
//         .then(result => {
//             res.status(200).json({
//                 message: 'Order was deleted',
//                 request: {
//                     type: "POST",
//                     all_orders_url: "http://localhost:5000/order",
//                     body: { productId: req.body.productId, quantity: "Number" }
//                 }
//             })
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 error: err
//             });
//         });
// });

orderRoute.delete('/:id', async(req, res) => {
    try {
        const deletedOrder = await OrderDetails.deleteOne({ _id: req.params.id })
        if (deletedOrder) return res.status(200).send('Order was deleted')
    } catch {
        res.status(500).json({
            message: 'Order does not exist'
        })
    }

})

// storyRoute.delete('/story/:id', verify, async(req, res) => {

//     try {
//         const deletedStory = await Story.deleteOne({ _id: req.params.id })
//         if (deletedStory) return res.status(200).send('Story was deleted')
//     } catch {
//         res.status(400).json({ message: 'Story was not found' })
//     }

// })

module.exports = orderRoute;