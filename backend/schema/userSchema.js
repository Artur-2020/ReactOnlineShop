const mongoose = require('mongoose'); 
const validate = require('mongoose-validator');

  

var  alphaValidator =  [
    validate({
        validator: 'isLength',
        arguments: [3, 50],
        message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters',
      }),
      validate({
        validator: 'isAlpha',
        passIfEmpty: true,
        message: 'Name should contain alpha-numeric characters only',
      }),
]
    var passValidator =  validate({
        validator: 'isLength',
        arguments: [6, 50],
        message: 'Password should be between {ARGS[0]} and {ARGS[1]} characters',
      })
    let emailValidator = [
        validate({
            validator:'isEmail',
            isAsync:false,
            message:'Email form is incorrect'
        }),


] 
     const Schema = mongoose.Schema

    const userModelSchema = new Schema({
        name:{type:String,required:true,validate:alphaValidator},
        surname:{type:String,required:true,validate:alphaValidator},
        age:{type:Number,min:16,max:110,required:true},
        email:{type:String,required:true,index:{unique:true},validate:emailValidator},
        password:{type:String,required:true,validate:passValidator},
        password:{type:String,required:true,validate:passValidator},
        product:[
            {type:Schema.Types.ObjectId,ref:'product'}
        ]
    })

 module.exports = mongoose.model('user',userModelSchema) 



