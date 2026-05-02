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
const getUserById = async(req,res)=>{

    //req.params : --url id --> params
    //req.query : searching --> 
    //req.body  :post obejct
    //req.headers:auth
    //console.log("params",req.params)
    //SQL = select * from users whwre id= ?
    //db.users.find({_id:ObjectId(req.params.id)}) //[]-->[0]
    //userSchama.find({_id:ObjectId(req.params.id)})
    //userSchema.findById(req.params.id) -->{}
    const id = req.params.id
    const foundUser = await userSchema.findById(id)

    res.json({
        message:"user found.",
        data:foundUser
    })


}
module.exports ={
    getAllUsers,
    getUserById
}