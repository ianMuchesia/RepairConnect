const express = require("express");

const {
  authenticateUser,
  authorizePermission,
} = require("../middleware/authentication");
const {
  createPost,
  createBid,
  deletePost,
  deleteBid,
  getSingleBid,
  getAllPosts,
  getSinglePost,
  getAllBids,
  getSingleUserPosts,
} = require("../controllers/postController");

const router = express.Router();

router.get("/", authenticateUser, getAllPosts);
router.get(
  "/myPosts",
  authenticateUser,
  authorizePermission("customer"),
  getSingleUserPosts
);
router.post("/", authenticateUser, authorizePermission("customer"), createPost);
router.delete(
  "/:id",
  authenticateUser,
  authorizePermission("customer"),
  deletePost
);

router.get(
  "/:id/bid",
  authenticateUser,
  authorizePermission("customer"),
  getAllBids
);

router.post(
  "/:id/bid/",
  authenticateUser,
  authorizePermission("technician"),
  createBid
);
router.patch(
  "/:id/bid/:bidID",
  authenticateUser,
  authorizePermission("technician"),
  deleteBid
);





router.get(
  "/:id/bid/:bidID",
  authenticateUser,
  authorizePermission("technician", "customer"),
  getSingleBid
);

router.get("/:id", authenticateUser, getSinglePost);

module.exports = router;
