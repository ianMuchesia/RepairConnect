const express = require("express")
const { getTechnician } = require("../controllers/technician")

const router = express.Router()

router.get("/", getTechnician)


module.exports = router