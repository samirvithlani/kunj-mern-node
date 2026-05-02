const mongoose = require("mongoose")
const DB_URL = "mongodb://127.0.0.1:27017/kunj_node"

const dbConnection = ()=>{

    mongoose.connect(DB_URL).then((data)=>{
        console.log(`db conncted..`)
    }).catch((err)=>{
        console.log("db not connected..",err)
    })

}
module.exports = dbConnection