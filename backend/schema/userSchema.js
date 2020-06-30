const mongoose = require('mongoose');
const validate = require('mongoose-validator');
var mongoDB = 'mongodb://127.0.0.1/onlineShop';

mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

var db = mongoose.connection;   
console.log(db)

db.on('error', console.error.bind(console, 'MongoDB connection error:')); 


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
        // validate({
        //     validator: (val)=> {
        //         return new Promise ( async (resolve, reject) => {
        //           let item =  await db.users.find({email:val})
        //           console.log(item)
        //           resolve(item.length>0)
        //         })
        //       },
        //     message:'Email alredy exist'  
        // })

] 
     const Schema = mongoose.Schema

    const userModelSchema = new Schema({
        name:{type:String,required:true,validate:alphaValidator},
        surname:{type:String,required:true,validate:alphaValidator},
        age:{type:Number,min:16,max:110,required:true},
        email:{type:String,required:true,index:{unique:true},validate:emailValidator},
        password:{type:String,required:true,validate:passValidator}
    })

 module.exports = mongoose.model('user',userModelSchema) 



