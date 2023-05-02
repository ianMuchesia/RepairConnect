const express = require("express")
const {   getAllTechnician } = require("../controllers/technicianController")

const router = express.Router()


router.get("/", getAllTechnician)

module.exports = router