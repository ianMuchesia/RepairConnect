const express = require("express")
const { registerUser, login, logout, registerTechnician } = require("../controllers/authController")

const router = express.Router()
router.post("/registerTechnician", registerTechnician)
router.post("/registerUser", registerUser)
router.post("/login", login)
router.get("/logout", logout)


module.exports = router