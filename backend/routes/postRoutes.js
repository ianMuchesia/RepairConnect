const express = require("express")

const { authenticateUser, authorizePermission } = require("../middleware/authentication")
const { createPost, getPosts, createBid, deletePost, deleteBid } = require("../controllers/postController")

const router = express.Router()


router.post("/",authenticateUser, authorizePermission('customer'), createPost)
router.delete("/:id",authenticateUser, authorizePermission('customer'),deletePost)


router.post("/bid/:id",authenticateUser, authorizePermission('technician'), createBid)
router.patch("/bid/:id",authenticateUser, authorizePermission('technician'),deleteBid)


router.get('/',authenticateUser, getPosts)



module.exports = router 