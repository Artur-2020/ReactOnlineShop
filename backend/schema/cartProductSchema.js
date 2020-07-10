const mongoose = require('mongoose');
const Schema = mongoose.Schema



const cartProductSchema = new Schema({
    name:{type:String},
    count:{type:Number},
    price:{type:Number},
    description:{type:String},
    user:{type:Schema.Types.ObjectId,ref:'user'},
    image:{type:String},
    myCount:{type:Number}

})

module.exports = mongoose.model('cart',cartProductSchema) 
