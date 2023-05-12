const { StatusCodes } = require("http-status-codes");
const Bid = require("../models/Bid");
const Post = require("../models/Post");
const { NotFoundError, BadRequestError } = require("../errors");
const { checkPermission } = require("../utils");

const getBids = async (req, res) => {
  const { postID } = req.params;

  const post = await Post.findOne({ post: postID, customer: req.user.userId });

  if (!post) {
    throw new NotFoundError(`Post with id:${postID} not found`);
  }

  checkPermission(req.user, post.customer);

  const bids = await Bid.find({ post: postID }).populate({
    path: "technician",
    select: "name location shop avatar",
  });

  res.status(StatusCodes.OK).json({ success: true, bids });
};

const getSingleBid = async (req, res) => {
  const { postID, bidID } = req.params;

  const post = await Post.findOne({ post: postID, customer: req.user.userId });

  if (!post) {
    throw new NotFoundError(`Post with id:${postID} not found`);
  }

  checkPermission(req.user, post.customer);

  const bid = await Bid.findOne({ _id: bidID, post: postID }).populate({
    path: "technician",
    select: "name location shop avatar",
  });

  res.status(StatusCodes.OK).json({ success: true, bid });
};

const acceptBid = async (req, res) => {
  const { postID, bidID } = req.params;

  const post = await Post.findOne({ post: postID, customer: req.user.userId });

  if (!post) {
    throw new NotFoundError(`Post with id:${postID} not found`);
  }

  checkPermission(req.user, post.customer);

  const bid = await Bid.findOneAndUpdate(
    { _id: bidID, post: postID },
    { bidAccepted: true },
    { new: true, runValidators: true }
  );

  post.accepted = true;
  post.status = "closed";
  await post.save();

  res.status(StatusCodes.OK).json({ success: true, bid });
};



const createBid = async (req, res) => {
  const { postID } = req.params;

  const { userId: technicianID } = req.user;
  const { amount, bidMessage } = req.body;

  const bidExists = await Bid.findOne({
    post: postID,
    technician: technicianID,
  });

  console.log(bidExists);
  if (bidExists) {
    throw new BadRequestError(" You can only bid once on a post");
  }
  await Bid.create({
    technician: technicianID,
    post: postID,
    amount,
    bidMessage,
  });

  res.status(StatusCodes.CREATED).json({ success: true });
};
const deleteBid = async (req, res) => {
  res.send("hello wold");
};
const getTechnicianBids = async (req, res) => {
  res.send("hello wold");
};
const getSingleTechnicianBid = async (req, res) => {
  res.send("hello wold");
};

module.exports = {
  createBid,
  getBids,
  getSingleBid,
  getSingleTechnicianBid,
  getTechnicianBids,
  deleteBid,
  acceptBid,
};
