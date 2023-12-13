const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const Post = require("../models/Post");
const { checkPermission } = require("../utils");
const Bid = require("../models/Bid");
const cloudinary = require("cloudinary").v2;

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const createPost = async (req, res) => {
  const { item, description ,image, otherImages} = req.body;

  if (!item || !description) {
    throw new BadRequestError("Please provide all the values");
  }

  const post = await Post.create({
    item,
    description,
    customer: req.user.userId,
  });
  res.status(StatusCodes.CREATED).json({ success: true, post });
};

const getPosts = async (req, res) => {
  const posts = await Post.find({});

  res.status(StatusCodes.OK).json({ success: true, posts });
};

const getSinglePost = async (req, res) => {
  const { id: postID } = req.params;

  const post = await Post.findOne({ _id: postID });

  if (!post) {
    throw new NotFoundError(`Post with id:${postID} not found`);
  }

  res.status(StatusCodes.OK).json({ success: true, post });
};

const updatePost = async (req, res) => {
  const { item, description } = req.body;

  const { id: postID } = req.params;

  if (!item || !description) {
    throw new BadRequestError("Please provide all the values");
  }

  checkPermission(req.user, req.user.userId);

  const post = await Post.findOneAndUpdate({ _id: postID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!post) {
    throw new NotFoundError(`Post with id:${postID} not found`);
  }

  res.status(StatusCodes.OK).json({ success: true, post });
};

const deletePost = async (req, res) => {
  const { id: postID } = req.params;


  const post = await Post.findOne({ _id: postID });

  if (!post) {
    throw new NotFoundError(`Post with id:${postID} not found`);
  }
  
  checkPermission(req.user, post.customer);

  await Post.deleteOne({ _id: postID })
  await Bid.deleteMany({ post: postID });

  res.status(StatusCodes.OK).json({ success: true, post });
};

module.exports = {
  createPost,
  getPosts,
  getSinglePost,
  updatePost,
  deletePost,
};
