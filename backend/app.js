
const express = require('express') 
const app=express()
const bodyParser = require('body-parser') 
const session = require('express-session')

const configureStripe = require('stripe');

//mongo
const mongoose = require ('mongoose')


var mongoDB = 'mongodb://127.0.0.1/onlineShop';

mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

var db = mongoose.connection;   

db.on('error', console.error.bind(console, 'MongoDB connection error:')); 


const router = require('./router')

 
const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_test_51H4LovFDR7tSfidLeLIFaLiPx3fWkngJDNocb5o4qBNVvtBIofRfbSsbFovKAs9YMOM9NAjElpq8JWKh0DB3tqpT00L8mRhm1C'
    : 'sk_test_51H4LovFDR7tSfidLeLIFaLiPx3fWkngJDNocb5o4qBNVvtBIofRfbSsbFovKAs9YMOM9NAjElpq8JWKh0DB3tqpT00L8mRhm1C';
 
const stripe = configureStripe(STRIPE_SECRET_KEY);
//set storage


//mongo


//models
const CartModel = require('./schema/cartProductSchema')
const UserModel = require('./schema/userSchema')
const ProductModel = require('./schema/productSchema')

app.use(session({
    secret: '1234',
    resave: false,
    saveUninitialized: true
  }))

  app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


const postStripeCharge = res => (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  }

app.post('/stripe',(req, res)=>{
    stripe.charges.create(req.body, postStripeCharge(res));

})
app.use(router)

app.listen(8000)