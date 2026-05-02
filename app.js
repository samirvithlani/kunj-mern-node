const express = require("express")
const app = express() // app object




//require routes
const userRoutes  = require("./src/routes/UserRoutes")
//app->
app.use("/user",userRoutes)





const PORT = 3000
app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})