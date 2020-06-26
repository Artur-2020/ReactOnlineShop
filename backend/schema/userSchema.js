const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userModelSchema = new Schema({
    name:{type:String,required:true,},
    surname:{type:String,required:true,},
    age:{type:Number,min:16,max:110},
    email:{type:String},
    password:{type:String}
})
 module.exports = mongoose.model('user',userModelSchema) 



