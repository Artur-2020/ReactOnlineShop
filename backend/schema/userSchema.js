const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userModelSchema = new Schema({
    name:{type:String,required:true,},
    surname:{type:String,required:true,},
    age:{type:Number,min:16,max:110,required:true},
    email:{type:String,required:true,index:{unique:true}},
    password:{type:String,required:true}
})
 module.exports = mongoose.model('user',userModelSchema) 



