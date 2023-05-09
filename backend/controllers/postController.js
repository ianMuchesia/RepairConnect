const Post = require("../models/Post");
const { StatusCodes } = require("http-status-codes");
const { checkPermission } = require("../utils");
const {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
  ForbiddenError,
} = require("../errors");

//post

const createPost = async (req, res) => {
  try {
    const { item, description } = req.body;

    if (!item || !description) {
      throw new BadRequestError("Please provide all values");
    }

    checkPermission(req.user, req.user.userId);

    const post = await Post.create({
      item,
      description,
      customer: req.user.userId,
    });

    console.log("here i am");

    res.status(StatusCodes.CREATED).json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

const getAllPosts = async (req, res) => {
  const posts = await Post.find({});

  res.status(StatusCodes.OK).json({ success: true, posts });
};

const getSinglePost = async (req, res) => {
  const { id: postID } = req.params;

  const post = await findOne({ _id: postID });
  if (!post) {
    throw new NotFoundError(`no post found with id:${postID}`);
  }
  res.status(StatusCodes.OK).json({ success: true, post });
};

const getSingleUserPosts = async (req, res) => {
  const { userId } = req.user;

  const posts = await Post.find({ owner: userId });

  res.status(StatusCodes.OK).json({ success: true, posts });
};

const deletePost = async (req, res) => {
  const { id: postId } = req.params;

  checkPermission(req.user, req.user.userId);
  const post = await Post.findOneAndRemove({ _id: postId });

  if (!post) {
    throw new NotFoundError(`no post found with id:${postId}`);
  }

  res.status(StatusCodes.CREATED).json({ success: true, post });
};

//bids

const createBid = async (req, res) => {
  const { id: postID } = req.params;
  const { userId: technicianId } = req.user;

  const { amount, bidMessage } = req.body;

  if (!amount || !bidMessage) {
    throw new BadRequestError("Please provide all values");
  }

  const post = await Post.findOne({ _id: postID });

  if (!post) {
    throw new NotFoundError(`no post found with id:${postID}`);
  }

  if (post.status !== "open") {
    throw new ForbiddenError("Bidding closed");
  }

  post.bids.push({
    technician: technicianId,
    amount,
    bidMessage: bidMessage,
  });

  await post.save();

  res.status(StatusCodes.CREATED).json({ success: true });
};

const getAllBids = async (req, res) => {
  const { id: postID } = req.params;
  const { userId } = req.user;
  checkPermission(req.user, userId);

  const bids = await Post.findOne({ _id: postID, owner: userId }).select(
    "bids"
  );

  if (!bids) {
    throw new NotFoundError(`no post found with id:${postID}`);
  }

  res.status(StatusCodes.OK).json({ success: true, bids });
};

const getSingleBid = async (req, res) => {
  const { id: postID, bidID } = req.params;

  checkPermission(req.user, req.user.userId);
  const post = await Post.findOne({
    _id: postID,
    $or: [
      { owner: req.user.userId },
      { bids: { $elemMatch: { technician: req.user.userId } } },
    ],
  }).select("bids");

  if (!post) {
    throw new NotFoundError(`No post found with id: ${postID}`);
  }

  // Find the bid that matches the bidID parameter
  const bid = post.bids.find((bid) => bid._id.toString() === bidID);

  if (!bid) {
    throw new NotFoundError(`No bid found with id: ${bidID} on post ${postID}`);
  }

  // Check if the bid belongs to the technician making the request
  if (bid.technician.toString() !== req.user.userId) {
    throw new UnauthenticatedError(`You are not authorized to access this bid`);
  }

  res.status(StatusCodes.OK).json({ success: true, bid });
};

const acceptBid = async (req, res) => {
  const { id: postID, bidID } = req.params;

  const post = await Post.findOne({
    _id: postID,
  }).select("technician bids");

  if (!post) {
    throw new NotFoundError(`post with id:${postID} not found`);
  }

  const bid = post.bids.find((item) => item._id.toString() === bidID);

  if (!bid) {
    throw new NotFoundError(`No bid found with id: ${bidID} on post ${postID}`);
  }

  checkPermission(req.user, req.user.userId);
  post.accepted = true;
  post.status = "closed";
  bid.bidAccepted = true;

  await post.save();

  res.status(StatusCodes.OK).json({ success: true, msg: "Success!" });
};

const deleteBid = async (req, res) => {
  const { id: postId, bidID } = req.params;

  checkPermission(req.user, req.user.userId);

  const post = await Post.findOne({
    _id: postId,
    bids: { $elemMatch: { technician: req.user.userId , _id: bidID } },
  });

  if (!post) {
    throw new NotFoundError(`No post found with id:${postId}`);
  }

   await Post.findOneAndUpdate(
    { _id: postId },
    { $pull: { bids: { _id: bidID } } },
    { new: true }
  );

  res.status(StatusCodes.OK).json({ success: true, msg: "Bid Deleted"});
};
module.exports = {
  getAllPosts,
  getSinglePost,
  createPost,
  createBid,
  deletePost,
  deleteBid,
  getSingleBid,
  getAllBids,
  getSingleBid,
  getSingleUserPosts,
  acceptBid,
};
