//routes -->express routes
const router = require("express").Router()
const userController = require("../controllers/UserController")
router.get("/users",userController.getAllUsers)
router.get("/user/:id",userController.getUserById)
router.get("/userbyname/:name",userController.getUsersByName)
router.post("/user",userController.addUser)

module.exports = router