const express = require("express")
const {  registerTechnician, getAllTechnician } = require("../controllers/technicianController")

const router = express.Router()

router.post("/register", registerTechnician)
router.get("/", getAllTechnician)

module.exports = router