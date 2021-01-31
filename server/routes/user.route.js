// Node JS server routing
const express = require('express');
const userRoute = express.Router();
let User = require('../models/user');
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verify = require('./verifyToken')
require('dotenv').config();
let OrderDetails = require('../models/OrderDetails');

//Sign up
// userRoute.post('/signup', (req, res, next) => {

//     User.findOne({ email: req.body.email })
//         .exec()
//         .then(user => {
//             if (!user) {
//                 bcrypt.hash(req.body.password, 10, (err, hash) => {

//                     const user = new User({
//                         _id: new mongoose.Types.ObjectId(),
//                         email: req.body.email,
//                         password: hash,
//                         name: req.body.name
//                     });
//                     user.save()
//                         .then(result => {
//                             console.log(result);
//                             res.status(201).json({
//                                 success: true,
//                                 message: 'User created'
//                             });
//                         })
//                         .catch(err => {
//                             console.log(err);
//                             res.status(500).json({
//                                 error: err
//                             });
//                         });
//                 });

//             } else {

//                 return res.status(409).json({
//                     message: 'Mail already exists'
//                 });

//             }

//         });
// });


userRoute.post('/signup', async(req, res) => {
    const emailExists = await User.findOne({ email: req.body.email })
    if (emailExists) return res.status(400).send('Email already exists')

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(req.body.password, salt)

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });

    try {
        const savedUser = await user.save()
        res.send(savedUser)
    } catch {
        res.status(400).send(err)
    }
})

// userRoute.post('/login', (req, res) => {
//     User.findOne({ email: req.body.email })
//         .exec()
//         .then(user => {
//             if (user) {
//                 bcrypt.compare(req.body.password, user.password, (err, result) => {
//                     if (result) {
//                         const token = jwt.sign({
//                                 email: user.email,
//                                 _id: user._id,
//                                 name: user.name,
//                             },
//                             process.env.JWT_KEY, {
//                                 expiresIn: "1h"
//                             },
//                         )
//                         return res.status(200).json({
//                             message: 'Login auth successful',
//                             token: token,
//                             user: {
//                                 _id: user._id,
//                                 name: user.name,
//                                 email: user.email
//                             }
//                             //Put order data
//                             // new

//                             //
//                         });
//                     } else {
//                         return res.status(401).json({
//                             message: 'Login failed!',
//                             user
//                         });
//                     }
//                 });

//             } else {
//                 return res.status(404).json({
//                     message: 'Email not found!'
//                 })
//             }

//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 message: 'Auth failed'
//             });
//         });
// });

// userRoute.post('/login', async(req,res)=>{
//     const user = await User.findOne({email:req.body.email})
//     if (!user) return res.status(400).send('Email or password is wrong');
//     const validPassword = await bcryptjs.compare(req.body.password, user.password)
//     if(!validPassword) res.status(400).send('Email or password is wrong'); 

//     const token = jwt.sign({
//         _id: user._id,
//         name: user.name,
//         email: user.email,

//     }, process.env.JWT_KEY)

//     return res.status(200).json({
//         message: "Login succesful!",
//         token: token,
//         user: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         }
//     })
// })

userRoute.post('/login', async(req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).send('Email or password is wrong');
    const validPassword = await bcryptjs.compare(req.body.password, user.password)
    if (!validPassword) res.status(400).send('Email or password is wrong');

    const token = jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,

    }, process.env.JWT_KEY)

    return res.status(200).json({
        message: "Login succesful!",
        token: token,
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
        }
    })
})

//User Profile
userRoute.get('/profile', verify, (req, res) => {
    res.json({
        message: 'Auth successful',
        user: req.user
    })
});

// User Profile (Orders)
// userRoute.get('/profile/orders', verify, (req, res) => {
//     OrderDetails.find({ UserId: req.user._id })
//         .then(user => {
//             res.status(200).json({
//                 Orders: user
//             });

//         });
// });

userRoute.get('/profile/orders', verify, async(req, res) => {
    const userOrders = await OrderDetails.find({ UserId: req.user._id })
    if (userOrders[0] == null) return res.send('No orders');
    res.status(200).json({
        TotalOrders: userOrders.length,
        userOrders: userOrders
    })
})


// userRoute.get('/profile/mystories', verify, async(req, res) => {
//     const stories = await Story.find({ UserId: req.user._id })
//     if (stories[0] == null) return res.send('No stories yet');
//     res.status(200).send(stories)
// })



//Delete user
// userRoute.delete('/:userId', (req, res, next) => {
//     User.deleteOne({ _id: req.params.userId })
//         .exec()
//         .then(result => {
//             res.status(200).json({
//                 message: 'User deleted'
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 error: err
//             });
//         });
// });

userRoute.delete('/:userId', async(req, res) => {
    try {
        const deletedUser = await User.deleteOne({ _id: req.params.id })
        if (deletedUser) return res.status(200).send('User deleted')
    } catch {
        res.status(400).json({ message: 'User was not found' })
    }

})



module.exports = userRoute