const express = require("express")
const {   getAllTechnician, getSingleTechnician } = require("../controllers/technicianController")
const { authenticateUser } = require("../middleware/authentication")

const router = express.Router()


router.get("/", getAllTechnician)
router.get("/:id",authenticateUser, getSingleTechnician)

module.exports = router