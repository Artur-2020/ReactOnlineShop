const UserModel = require('../schema/userSchema')
const CartModel = require('../schema/cartProductSchema')
const ProductModel = require('../schema/productSchema')

const {check, validationResult } = require('express-validator');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const fs =  require('fs');


class UserController{
    findUser(req,res){
        if(req.body.id1 != ''){
         let user = {}
     
         UserModel.
         findOne({ _id: req.body.id1 }).
         populate('product'). // only works if we pushed refs to children
         exec(function (err, person) {
           if (err) return err;
           console.log(person);
           
             user.name = person.name
             user.surname = person.surname
             user.age = person.age
             user.email = person.email
             user.product = person.product
             res.send (user)
         
         });   
        }
        else {
            res.send('error')
        }
     }
     editdata(req,res){
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
       
                UserModel.updateOne({_id:req.body.id},{$set:{name:req.body.name,surname:req.body.surname,age:req.body.age,emaol:req.body.email}}).then(result =>{
                    console.log(result)
                })
                res.send(['ok'])
            }
    }

    addProduct(req,res){
        console.log('ekats tvyal',req.body)
        let img = req.body.file
        let product = new ProductModel ({
            name:req.body.name,
            count:req.body.count,
            price:req.body.price,
            description:req.body.description,
            user:req.body.id,
            image:img
        })
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
                UserModel.updateOne({_id:req.body.id},{ $push: { 'product':product} }).then(result=> {
                    console.log(result)
                })
                product.save()         
                res.send('ok')
            }
           
       
    }
    
    products(req,res){
        ProductModel.find().then(result =>{
            res.send(result)
        })
    }
    showMyProducts(req,res){

        ProductModel.find({ user: req.body.id }).then(result => {
            res.send(result)
        })
    }
    addCart(req,res){

        console.log('addCart',req.body)
    
        res.send('added')
        let cart = new CartModel ({
            productId:req.body._id,
            name:req.body.name,
            count:req.body.count,
            price:req.body.price,
            description:req.body.description,
            user:req.body.user,
            myCount:1,
            image:req.body.image
        })
        CartModel.findOne({productId:req.body._id}).then(result =>{
            console.log(result)
            if(result == null){
                cart.save()
            }
            else{
                if(result.myCount<result.count){
                    CartModel.updateOne({productId:req.body._id},{$inc:{myCount:1}}).then(result2 => {
                        console.log('poxvac',result2)
                    })
                }
               
            }
        })
    }
    showcart(req,res){
        CartModel.find().then(result =>{
            res.send(result)
        })
    }
    upload(req,res){
       
        ProductModel.updateOne({image:req.body.Time},{$set:{image:req.file.filename}}).then(result => [
        ])
        res.send('file')
    }
    deleteFromCart(req,res){
        console.log(req.body.id)
        CartModel.deleteOne({_id:req.body.id}).then(result=>{
            console.log('deleted',result)
        })
        CartModel.find().then(result =>{
            res.send(result)
        })
    }
    deleteFromMyProduct(req,res){
        console.log(req.body.id)
        ProductModel.deleteOne({_id:req.body.id}).then(result=>{
            console.log('deleted',result)
        })
        let name = `public/image/${req.body.image}`
        console.log('jnjvox nkar',name)
        fs.unlink(`${name}`, function (err) {
            if (err) throw err;
            // if no error, file has been deleted successfully
            console.log('File deleted!');
        }); 
        ProductModel.find({user:req.body.userId}).then(result =>{
            res.send(result)
        })
    }
    searchResult(req,res){
        console.log(req.body.value)
       ProductModel.find({name:req.body.value}).then(result =>{
           console.log('products',result)
         res.send(result)

       })
    }
    myProd(req,res){
        console.log('myProd')
    }
}
module.exports = new UserController
