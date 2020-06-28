const express = require('express') 
const app=express()
const bodyParser = require('body-parser') 
const mongoose = require ('mongoose')

var mongoDB = 'mongodb://127.0.0.1/onlineShop';

mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

var db = mongoose.connection;   

const UserModel = require('./schema/userSchema')

db.on('error', console.error.bind(console, 'MongoDB connection error:')); 


const data = new UserModel({
    name:"Sahak",
    surname:"Varosyan",
    age:17,
    email:"A@gmail.com",
    password:"12344"
})
data.save((error)=> {if(error)  console.log(error)})



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

app.post('/signupForm',(req,res)=>{
    res.send('ok')
    
})
app.post('/products',(req,res)=>{
    res.send([{name:'Mobile'}])
    
})


//ete nodey ashxatum a menak vorpes server ete frameworkic inchvor tvyal petq e ga menq use petq e anenq
app.listen(8000)