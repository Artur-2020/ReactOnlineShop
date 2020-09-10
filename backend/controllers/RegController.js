//mongo


const {check, validationResult } = require('express-validator');

const bcrypt = require('bcrypt');
const saltRounds = 10;
const UserModel = require('../schema/userSchema')
const CartModel = require('../schema/cartProductSchema')
const ProductModel = require('../schema/productSchema')



class RegController{

 
    signup(req,res){
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
            console.log('save arec')     
            });
        }
    }

    async login(req,res){
  
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
        
        }
}
module.exports = new RegController
