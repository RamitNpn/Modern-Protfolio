const { createUser, getClients, login, becomeClient, getSessionuser, adminInfo, logout } = require("../controller/UserController");


const router = require("express").Router()

router.get("/sessionUser",getSessionuser)
router.post("/create",createUser)
router.get("/client",getClients)
router.get("/adminInfo",adminInfo)
router.post("/becomeclient/:userId",becomeClient)
router.post("/login",login)
router.post("/logout",logout)




module.exports =router;