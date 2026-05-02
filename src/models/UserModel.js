const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema({})

//userSchema bind + --> users collection
module.exports = mongoose.model("users",userSchema)

//db.users.find ===> userSchema.find