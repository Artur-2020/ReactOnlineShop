
const express = require('express') 
const app=express()
const bodyParser = require('body-parser') 
const mongoose = require ('mongoose')
const session = require('express-session')

const {check, validationResult } = require('express-validator');

const bcrypt = require('bcrypt');
const saltRounds = 10;

var mongoDB = 'mongodb://127.0.0.1/onlineShop';

mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

var db = mongoose.connection;   

db.on('error', console.error.bind(console, 'MongoDB connection error:')); 


const UserModel = require('./schema/userSchema')


app.use(session({
    secret: '1234',
    resave: false,
    saveUninitialized: true
  }))

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
       
       return   UserModel.findOne({email:value}).then(user => {
           if(user){
               return Promise.reject()
           }    
       })       
     }).withMessage('Emaily allredy exist')
   
],(req,res)=>{
    let confirmErr = ''
    if(req.body.confirmPassword==''){
        confirmErr='Path `confirmPassword` is required.' 
    }
   if( req.body.confirmPassword!='' && req.body.confirmPassword != req.body.password){
    confirmErr='Passwordes don`t match '
   }
   let Exerrors = validationResult(req)
   let emerror = {email:''}
       if (!Exerrors.isEmpty()){
               emerror.email = Exerrors.errors[0].msg   
       }
       
  
   let data = new UserModel({
        name:req.body.name,
        surname:req.body.surname,
        age:req.body.age,
        email:req.body.email,
        password:req.body.password
    })
    const errors = data.validateSync()
       
    if(errors!=undefined || confirmErr!='' || emerror.email!=''){
        
        res.send([errors,confirmErr,emerror])
    }
    else{
        bcrypt.hash(req.body.password, saltRounds,  async function(err, hash) {
        data.password = hash
        res.send('ok')
        data.save()           
        });
    }
})
app.post('/loginForm',[
        check('email').notEmpty().withMessage('  Fill in the email field blank').isEmail().withMessage('The form is incorrect '),
        check('password').notEmpty().withMessage(' Fill in the password field blank'),     
        check('email').custom(  (value,{req})   => {    
            return   UserModel.findOne({email:value}).then(user => {
                if(!user){
                    return Promise.reject()
                }
                else{
                    let flag = (bcrypt.compareSync(req.body.password, user.password ))
                    if(!flag){
                      return Promise.reject()
                    }
                    else{
                        req.session.userId = user._id
                    }        
                }
            })
        }).withMessage('Something is incorrect')
   ],
    async (req,res)=>{
      
    const errors = validationResult(req)
    let error = {}
        if (!errors.isEmpty()){
        
           errors.errors.forEach((i)=>{
            if(error[i.param]==undefined){
                error[i.param] = i.msg
              }
           })
           
          res.send([error])
        }
        else{
           
        res.send(['ok',req.session.userId])

        }

})
app.post('/findUser', async (req,res)=>{
   if(req.body.id != ''){
    let user = {}

    await UserModel.findOne({_id:req.body.id}).then(result => {
        user.name = result.name
        user.surname = result.surname
        user.age = result.age
        user.email = result.email
    })
    res.send(user)
   }
   else {
       res.send('error')
   }
})
app.post('/editdata',[
    check('name').notEmpty().withMessage('fill in the name field blank').isAlpha().withMessage('The name field should only contain a letter'),
    check('surname').notEmpty().withMessage('fill in the surname field blank').isAlpha().withMessage('The surname field should only contain a letter'),
    check('email').notEmpty().withMessage(' fill in the email field blank').isEmail().withMessage('The form is incorrect '),
    check('age').notEmpty().withMessage('fill in the age field blank').isNumeric().withMessage(' The age field should only contain a number'),   
    check('email').custom(  value   => {
       
        return   UserModel.findOne({email:value}).then(user => {
            console.log('useri email',user.email)
            console.log('value',value)
            if(user){
                return Promise.reject()
            }    
        })       
      }).withMessage('Emaily allredy exist')


   
],(req,res)=> {
    console.log(req.session)    
    const errors = validationResult(req)
    let error = {}
        if (!errors.isEmpty()){
        
           errors.errors.forEach((i)=>{
            if(error[i.param]==undefined){
                error[i.param] = i.msg
              }
           })
           res.send([error])       
        }
        else{
            res.send(['ok'])
        }
       

})
app.post('/products',(req,res)=>{
    console.log('pproduct',req.session)
    res.send([{name:'Mobile'}])  
})
app.listen(8000)