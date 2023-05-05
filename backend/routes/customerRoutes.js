const express = require("express")

const { authenticateUser } = require("../middleware/authentication")
const {getAllCustomer} = require("../controllers/customerController")
const router = express.Router()


router.get("/", getAllCustomer)

module.exports = router 