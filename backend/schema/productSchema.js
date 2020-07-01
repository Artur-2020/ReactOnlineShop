const Schema = mongoose.Schema
const mongoose = require('mongoose');


const productSchema = new Schema({
    name:{type:String,required:true},
    count:{type:Number,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:false},
    user:{type:Schema.Types.ObjectId,ref:'user'}
})

module.exports = mongoose.model('product',productSchema) 
