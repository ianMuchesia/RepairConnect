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

  const post = await Post.findOne({ _id: postID, customer: req.user.userId });

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

const getTechnicianBids = async (req, res) => {
  const bids = await Bid.find({ technician: req.user.userId }).populate({
    path: "post",
    select: "item description image status",
  });

  res.status(StatusCodes.OK).json({ success: true, bids });
};
const getSingleTechnicianBid = async (req, res) => {
  const { bidID } = req.params;
  const bid = await Bid.findOne({
    _id: bidID,
    technician: req.user.userId,
  }).populate({
    path: "post",
    select: "item description image status",
  });

  if (!bid) {
    throw new NotFoundError(`Bid with id:${bidID} not found`);
  }

  res.status(StatusCodes.OK).json({ success: true, bid });
};

const cancelBid = async(req, res)=>{
  const { bidID } = req.params;
  const bid = await Bid.findOne({ _id: bidID });
  if (!bid) {
    throw new NotFoundError(`Bid with id:${bidID} not found`);
    }
    

}
const deleteBid = async (req, res) => {
  const { bidID } = req.params;

  const bid = await Bid.findOne({ _id: bidID, technician: req.user.userId });

  if (!bid) {
    throw new NotFoundError(`Bid with id:${bidID} not found`);
  }

  if (bid.bidAccepted) {
    throw new BadRequestError(
      "You can not delete bids that are accepted, please cancel first"
    );
  }

  await Bid.deleteOne({ _id: bidID });

  res.status(StatusCodes.OK).json({ success: true });
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
