const express = require('express')
const  router = express.Router()
const multer = require('multer')
const {check, validationResult } = require('express-validator');

var storage = multer.diskStorage({   destination: function (req, file, cb) { 
    cb(null, 'public/image')   },   filename: function (req, file, cb) {   
        console.log('multeri file',file)
    cb(null, Date.now()+file.originalname)    } })
var upload = multer({ storage: storage })

//hash
const bcrypt = require('bcrypt');
const saltRounds = 10;

const RegController = require('./controllers/RegController')
const UserController = require('./controllers/UserController')
UserModel = require('./schema/userSchema')



router.post('/signupForm',[    
    check('email').custom(  value   => {
       
       return   UserModel.findOne({email:value}).then(user => {
           if(user){
               return Promise.reject()
           }    
       })       
     }).withMessage('Emaily allredy exist')
   
],RegController.signup)

router.post('/loginForm',[
    check('email').notEmpty().withMessage('  Fill in the email field blank').isEmail().withMessage('The form is incorrect '),
    check('password').notEmpty().withMessage(' Fill in the password field blank'),     
    check('email').custom(  (value,{req})  => {    
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
],RegController.login)


router.post('/findUser',UserController.findUser)

router.post('/editdata',[
    check('name').notEmpty().withMessage('fill in the name field blank').isAlpha().withMessage('The name field should only contain a letter'),
    check('surname').notEmpty().withMessage('fill in the surname field blank').isAlpha().withMessage('The surname field should only contain a letter'),
    check('email').notEmpty().withMessage(' fill in the email field blank').isEmail().withMessage('The form is incorrect '),
    check('age').notEmpty().withMessage('fill in the age field blank').isNumeric().withMessage(' The age field should only contain a number'),   
    check('email').custom( value   => {
       
        return   UserModel.findOne({email:value}).then(user => {
            if(user){
                return Promise.reject()
            }    
        })       
      }).withMessage('Emaily allredy exist')
   
],UserController.editdata)

router.post('/addProduct',[
    check('name').notEmpty().withMessage('fill in the name field blank'),
    check('price').notEmpty().withMessage('fill in the price field blank').isNumeric().withMessage('The price field should only contain a number'),
    check('count').notEmpty().withMessage('fill in the count field blank').isNumeric().withMessage(' The age field should only contain a number'),   
],UserController.addProduct)

router.post('/products',UserController.products)

router.post('/showMyProducts',UserController.showMyProducts)

router.post('/addCart',UserController.addCart)

router.post('/showcart',UserController.showcart)

router.post('/upload',upload.single('file'),UserController.upload)

router.post('/deleteFromCart',UserController.deleteFromCart)

router.post('/deleteFromMyProduct',UserController.deleteFromMyProduct)

router.post('/searchResult',UserController.searchResult)

router.get('/myProduct',UserController.myProd)

module.exports = router
