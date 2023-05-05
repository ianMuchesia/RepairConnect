const mongoose = require('mongoose')



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
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    },
    image:{
        type:String,

    },
    otherImages:{
        type:[String],
    }
  })

  PostSchema.index({ technician: 1, customer: 1 }, { unique: true });

  
const Post = mongoose.model('Post',PostSchema )

module.exports = Post
  