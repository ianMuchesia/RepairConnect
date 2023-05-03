const express = require("express")
const {  login, logout, registerTechnician, registerCustomer, showUser } = require("../controllers/authController")
const { authenticateUser } = require("../middleware/authentication")

const router = express.Router()
router.post("/registerTechnician", registerTechnician)
router.post("/registerCustomer", registerCustomer)
router.post("/login", login)
router.get("/showMe",authenticateUser, showUser)
router.get("/logout", logout)


module.exports = router