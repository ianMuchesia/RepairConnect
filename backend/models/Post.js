const mongoose = require('mongoose');
const { BadRequestError } = require('../errors');



const Schema = mongoose.Schema


const PostSchema = new Schema ({
    item: {
      type: String,
      required: true
    },
    description:{
      type:String,
      required:true,
      maxlength: [1000, "Description can not be more than 1000 characters"],
    },
    owner:{
      type:mongoose.Schema.ObjectId,
      ref: "Customer",
      required:true,
    },
    bids: [{
      technician: {
        type: mongoose.Schema.ObjectId,
        ref: "Technician"
      },
      amount: {
        type: Number,
        required: true
      },
      bidMessage:{
        type:String,
        required:true,
        maxlength: [1000, "Description can not be more than 1000 characters"],
      }
    }],
    status: {
      type: String,
      enum: ["open", "closed", "expired", "completed"],
      default: "open"
    },
    notes: {
      type: String,
      maxlength: [1000, "Notes can not be more than 1000 characters"],
    },

    image:{
        type:String,

    },
    otherImages:{
        type:[String],
    }
  }, {timestamps:true})

  PostSchema.index({ owner: 1, "bids.technician": 1 }, { unique: true });


  // ensure each technician can only bid once per post
PostSchema.pre('save', function (next) {
  const technicianIds = this.bids.map(bid => bid.technician.toString());
  if (technicianIds.length !== new Set(technicianIds).size) {
    throw new BadRequestError('Each technician can only bid once per post')
  }
  next();
});
  
const Post = mongoose.model('Post',PostSchema )

module.exports = Post
  