const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    //fileds --> schema -->fildes
    name:{
        type:String
    },
    age:{
        type:Number
    },
    email:{
        type:String,
    },
    password:{
        type:String
    },
    status:{
        type:Boolean,
        default:true
    }
})

//userSchema bind + --> users collection
module.exports = mongoose.model("users",userSchema)

//db.users.find ===> userSchema.find