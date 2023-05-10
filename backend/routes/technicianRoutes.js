const express = require("express");
const {
  getSingleTechnician,
  getAllTechnicians,
} = require("../controllers/technicianController");
const { authenticateUser } = require("../middleware/authentication");

const router = express.Router();

router.get("/", getAllTechnicians);
router.get("/:id", authenticateUser, getSingleTechnician);

module.exports = router;
