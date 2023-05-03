const express = require("express")
const { showUser } = require("../controllers/userController")
const { authenticateUser } = require("../middleware/authentication")

const router = express.Router()


router.get("/showMe",authenticateUser, showUser)

module.exports = router