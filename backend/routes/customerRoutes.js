const express = require("express")

const { authenticateUser } = require("../middleware/authentication")
const {getAllCustomer, getSingleCustomer} = require("../controllers/customerController")
const router = express.Router()


router.get("/", getAllCustomer)
router.get('/:id',authenticateUser ,getSingleCustomer)

module.exports = router 