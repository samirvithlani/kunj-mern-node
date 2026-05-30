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

const getUsersByName = async(req,res)=>{

    const name = req.params.name
    const users = await userSchema.find({name:name})
    res.json({
        data:users
    })
}

const addUser = async(req,res)=>{

        //req.body -->console..
        //console.log("req.body..",req.body)
        //db.users.insertOne({name:"",age:23,email:"",password:""})
        //db.users -->userSchema
        const savedUser = await userSchema.create(req.body)
        res.json({
            message:"user added..",
            data:savedUser
        })


}

//req -->params, query ,body, headers
//params -->id-
//query -->multipule params searcg
//body ->object0-->create
//headers auth
module.exports ={
    getAllUsers,
    getUserById,
    getUsersByName,
    addUser
}