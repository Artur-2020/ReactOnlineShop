const mongoose = require('mongoose');
const Schema = mongoose.Schema
const validate = require('mongoose-validator');

var  alphaValidator =  [
    
    validate({
      validator: 'isAlpha',
      passIfEmpty: true,
      message: 'Name should contain alpha-numeric characters only',
    }),
]



const productSchema = new Schema({
    name:{type:String,required:true,validate:alphaValidator},
    count:{type:Number,required:true,},
    price:{type:Number,required:true},
    description:{type:String,required:false},
    user:{type:Schema.Types.ObjectId,ref:'user'},
    image:{type:String}
})

module.exports = mongoose.model('product',productSchema) 
