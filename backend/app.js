
const {check, validationResult } = require('express-validator');

const express = require('express') 
const app=express()
const bodyParser = require('body-parser') 
const mongoose = require ('mongoose')

var mongoDB = 'mongodb://127.0.0.1/onlineShop';

mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

var db = mongoose.connection;   

db.on('error', console.error.bind(console, 'MongoDB connection error:')); 


const UserModel = require('./schema/userSchema')

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

app.post('/signupForm',[    
    check('email').custom(  value   => {
        let data1
         UserModel.findOne({email:value},(error,data)=>{
             console.log(data)
          
          data1 =data
        })
        console.log(data1)

        if(data1 === null){
            return false
        }
        else{
            return true
        }
        
     }).withMessage('Emaily allredy exist')
   
],(req,res)=>{
    let confirmErr = ''
    if(req.body.confirmPassword==''){
        confirmErr='confirm Password is Required' 
    }
   if( req.body.confirmPassword!='' && req.body.confirmPassword != req.body.password){
    confirmErr='Passwordes don`t match '
   }
   let Exerrors = validationResult(req)
   console.log(Exerrors)
   let error = {}
       if (!Exerrors.isEmpty()){
        //   Exerrors.errors.forEach((i)=>{
        //    if(error[i.param]==undefined){
        //        error[i.param] = i.msg
        //      }
        //   })
          
        //  res.send(error)
       }
       
  
   const data = new UserModel({
        name:req.body.name,
        surname:req.body.surname,
        age:req.body.age,
        email:req.body.email,
        password:req.body.password
    })
    const errors = data.validateSync()
    
    if(errors!=undefined || confirmErr!=''){
        res.send([errors,confirmErr])
    }
    else{
        res.send('ok')
        data.save()
            
    }
    
    
})
app.post('/loginForm',[
        check('email').notEmpty().withMessage('  fill in the email field blank').isEmail().withMessage('The form is incorrect '),
        check('password').notEmpty().withMessage(' fill in the password field blank'),     
   ],(req,res)=>{
    const errors = validationResult(req)
    let error = {}
        if (!errors.isEmpty()){
        
           errors.errors.forEach((i)=>{
            if(error[i.param]==undefined){
                error[i.param] = i.msg
              }
           })
           
          res.send(error)
        }
        else{
            res.send('ok')
        }
})
app.post('/products',(req,res)=>{
    res.send([{name:'Mobile'}])
    
})


//ete nodey ashxatum a menak vorpes server ete frameworkic inchvor tvyal petq e ga menq use petq e anenq
app.listen(8000)