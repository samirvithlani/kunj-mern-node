//routes -->express routes
const router = require("express").Router()
const userController = require("../controllers/UserController")
router.get("/users",userController.getAllUsers)
router.get("/user/:id",userController.getUserById)
router.get("/userbyname/:name",userController.getUsersByName)
router.post("/user",userController.addUser)
router.delete("/user/:id",userController.deleteUser)

module.exports = router