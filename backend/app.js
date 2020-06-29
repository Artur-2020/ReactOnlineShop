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
    const data = new UserModel({
        name:req.body.name,
        surname:req.body.surname,
        age:req.body.age,
        email:req.body.email,
        password:req.body.password
    })
    const errors = data.validateSync()
    console.log(errors)
    if(errors!=undefined){
        res.send(errors)
        console.log('sxal ka')
    }
    else{
        res.send('ok')
        data.save()
    }
    
    
})
app.post('/products',(req,res)=>{
    res.send([{name:'Mobile'}])
    
})


//ete nodey ashxatum a menak vorpes server ete frameworkic inchvor tvyal petq e ga menq use petq e anenq
app.listen(8000)