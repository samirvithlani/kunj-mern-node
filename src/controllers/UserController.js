//functions --->API

var users = [
    {id:1,name:"ram",age:23,status:true},
    {id:2,name:"shyam",age:24,status:true},
    {id:3,name:"krishna",age:25,status:true},
    {id:4,name:"deep",age:26,status:true},
]

const getAllUsers =(req,res)=>{

    res.json({
        message:"users found",
        data:users

    })

}
module.exports ={
    getAllUsers
}