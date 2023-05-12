const express = require("express");
const { authenticateUser, authorizePermission } = require("../middleware/authentication");
const { createBid, getTechnicianBids, getBids, getSingleTechnicianBid, getSingleBid, acceptBid } = require("../controllers/bidController");


const router = express.Router()

router.get('/:postID', authenticateUser, authorizePermission('customer'), getBids)
router.patch('/:postID/:bidID', authenticateUser, authorizePermission('customer'), acceptBid)
router.get('/:postID/:bidID', authenticateUser, authorizePermission('customer'), getSingleBid)



router.post('/:postID', authenticateUser, authorizePermission('technician'), createBid)
router.get('/', authenticateUser, authorizePermission('technician'), getTechnicianBids)
router.delete('/:bidID', authenticateUser, authorizePermission('technician'), createBid)

router.post('/:bidID', authenticateUser, authorizePermission('technician'), getSingleTechnicianBid)



module.exports = router
