const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    // config = require('./DB');
    productRoute = require('./routes/product.route');
const userRoute = require('./routes/user.route');
const orderRoute = require('./routes/order.route');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

// connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPW}@cluster0.ymewz.mongodb.net/newSurpass?retryWrites=true&w=majority`, { useNewUrlParser: true }).then(() => { console.log('Database is connected!') },
    err => { console.log('Can not connect to DB' + err) }
);



const app = express();
app.use(bodyParser.json());
app.use(cors());


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS, PUT"
    );

    next();
});


app.use("/api", productRoute);
app.use("/api/user", userRoute);
app.use("/api/order", orderRoute);

app.use(express.static('../dist/ExceriseOne'));

app.get('/*', function(req, res) {
    res.sendFile(path.join('../dist/ExceriseOne/index.html'));
});


// EMAIL //

const transporter = nodemailer.createTransport({

    host: 'smtp.gmail.com',
    provider: 'gmail',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL, // Enter here email address from which you want to send emails
        pass: process.env.PASSWORD // Enter here password for email account from which you want to send emails
    },
    tls: {
        rejectUnauthorized: false
    }
});

app.use(bodyParser.json());

// app.use(function (req, res, next) {

//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS, PUT"
    );

    next();
});

app.post('/send', function(req, res) {

    let senderName = req.body.contactFormName;
    let senderEmail = req.body.contactFormEmail;
    let messageSubject = req.body.contactFormSubjects;
    let messageText = req.body.contactFormMessage;
    let copyToSender = req.body.contactFormCopy;



    const output =
        `<p> You have a new contact request</p>
  <h3>Contact Details</h3>
  <ul>
    <li>Name: ${senderName}</li>
    <li>Email: ${senderEmail}</li>
    <li>Subject: ${messageSubject}</li>
  </ul>
    <h3>Message</h3>
    ${messageText}
  `;



    let mailOptions = {
        to: ['moshemoses1233@gmail.com'], // Enter here the email address on which you want to send emails from your customers
        from: senderName,
        subject: messageSubject,
        text: messageText,
        replyTo: senderEmail,
        // cc:senderEmail,
        html: output

    };


    if (senderName === '') {
        res.status(400);
        res.send({
            message: 'Bad request'
        });
        return;
    }

    if (senderEmail === '') {
        res.status(400);
        res.send({
            message: 'Bad request'
        });
        return;
    }

    if (messageSubject === '') {
        res.status(400);
        res.send({
            message: 'Bad request'
        });
        return;
    }

    if (messageText === '') {
        res.status(400);
        res.send({
            message: 'Bad request'
        });
        return;
    }

    if (copyToSender) {
        mailOptions.to.push(senderEmail);

    }

    transporter.sendMail(mailOptions, function(error, response) {
        if (error) {
            console.log(error);
            res.end('error');
        } else {
            console.log('Message sent: ', response);
            res.end('sent');
        }
    });
});



//------------------Mail Repeicpt------------------//


app.post('/sendReceipt', function(req, res) {

    let senderName = req.body.firstName;
    let senderLastName = req.body.lastName;
    let senderEmail = req.body.email;
    let senderPhone = req.body.phone
    let messageSubject = "New order from Surpass";
    let messageText = req.body.message
    let copyToSender = req.body.contactFormCopy;
    let orderDetails = req.body.orderDetails



    const output =
        `<p> You have a new order</p>
  <h3>Contact Details</h3>
  <ul>
    <li>Name: ${senderName} ${senderLastName}</li>
    <li>Phone: ${senderPhone}</li>
    <li>Email: ${senderEmail}</li>
    <li>order: ${orderDetails}</li>c
    <h3>Message</h3>
    ${messageText}
  </ul>
  `;



    let mailOptions = {
        to: ['moshemoses1233@gmail.com'], // Enter here the email address on which you want to send emails from your customers
        from: senderName,
        senderLastName,
        subject: messageSubject,
        replyTo: senderEmail,
        // cc:senderEmail,
        html: output

    };


    if (senderName === '') {
        res.status(400);
        res.send({
            message: 'Bad request'
        });
        return;
    }

    if (senderEmail === '') {
        res.status(400);
        res.send({
            message: 'Bad request'
        });
        return;
    }

    if (copyToSender) {
        mailOptions.to.push(senderEmail);
    }

    transporter.sendMail(mailOptions, function(error, response) {
        if (error) {
            console.log(error);
            res.end('error');
        } else {
            console.log('Message sent: ', response);
            res.end('sent');
        }
    });
});




let port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log('Listening to port ' + port);
});