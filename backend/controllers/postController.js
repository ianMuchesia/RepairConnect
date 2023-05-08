const Post = require("../models/Post");
const { StatusCodes } = require("http-status-codes");
const { checkPermission } = require("../utils");
const { BadRequestError, NotFoundError } = require("../errors");




//post

const createPost = async (req, res) => {
  req.body.owner = req.user.userId;
  const { item, description } = req.body;

  if (!item || !description) {
    throw new BadRequestError("Please provide all values");
  }

  checkPermission(req.user, req.user.userId);
  const post = await Post.create(req.body);

  res.status(StatusCodes.CREATED).json({ success: true });
};



   
const getAllPosts = async (req, res) => {
  const posts = await Post.find({});

  res.status(StatusCodes.OK).json({ success: true, posts });
};


const getSinglePost = async(req, res)=>{
    const {id:postID} = req.params

    const post = await findOne({_id:postID})
    if(!post){
        throw new NotFoundError(`no post found with id:${postID}`);

    }
    res.status(StatusCodes.OK).json({ success: true, post });
}





const deletePost = async(req, res)=>{
    const { id: postId } = req.params;

    checkPermission(req.user, req.user.userId);
    const post = await Post.findOneAndRemove({_id:postId})

    if (!post) {
        throw new NotFoundError(`no post found with id:${postId}`);
      }

      res.status(StatusCodes.CREATED).json({success:true, post})
}



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
  
    post.bids.push({
      technician: technicianId,
      amount,
      bidMessage: bidMessage,
    });
  
  
    await post.save(); 
  
    res.status(StatusCodes.CREATED).json({success:true})
  };
  



const getAllBids = async(req , res)=>{
    
    const {id:postID} = req.params
    checkPermission(req.user , req.user.userId)

    const bids = await Post.findOne({_id:postID}).select('bids')

    if(!bids){
        throw new NotFoundError(`no post found with id:${postID}`); 
    }

    res.status(StatusCodes.OK).json({success:true})


} 



const getSingleBid = async (req, res) => {
    const { id: postID, bidID } = req.params;
    checkPermission(req.user, req.user.userId);
  
    const post = await Post.findOne({ _id: postID }).select('bids');
  
    if (!post) {
      throw new NotFoundError(`No post found with id: ${postID}`);
    }
  
    //id() is a method provided by Mongoose to find a subdocument by its _id
    const bid = post.bids.id(bidID);
  
    if (!bid) {
      throw new NotFoundError(`No bid found with id: ${bidID} on post ${postID}`);
    }
  
    res.status(StatusCodes.OK).json({ success: true, bid });
  };
  



const deleteBid = async(req, res)=>{
    const { id: postId } = req.params;
    const {bidId} = req.body


    checkPermission(req.user , req.user.userId)

    const post = await Post.findOneAndUpdate(
        postId,
        { $pull: {bids:{_id:bidId}}},
        {new:true}

    )

    if(!post){
        throw new NotFoundError(`no post found with id:${postId}`)
    }
    res.status(StatusCodes.OK).json({success:true})
}
module.exports = { getAllPosts, createPost , createBid, deletePost, deleteBid, getSingleBid ,getAllBids , getSingleBid};
