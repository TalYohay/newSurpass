const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

require('dotenv').config();



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

app.post('/send', function (req, res) {

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

  transporter.sendMail(mailOptions, function (error, response) {
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


app.post('/sendReceipt', function (req, res) {

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
    from: senderName, senderLastName,
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

  transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
      res.end('error');
    } else {
      console.log('Message sent: ', response);
      res.end('sent');
    }
  });
});




app.listen(port, function () {
  console.log('Express started on port: ', port);
});