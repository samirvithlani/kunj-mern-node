//functions --->API
const userSchema = require("../models/UserModel")

const getAllUsers =async(req,res)=>{

    //db.users.find()
    
     const users = await userSchema.find()

    res.json({
        message:"users found",
        data:users

    })

}
module.exports ={
    getAllUsers
}