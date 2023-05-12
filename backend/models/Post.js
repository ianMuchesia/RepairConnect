const mongoose = require("mongoose");
const { BadRequestError } = require("../errors");

const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    item: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: [1000, "Description can not be more than 1000 characters"],
    },
    customer: {
      type: mongoose.Schema.ObjectId,
      ref: "Customer",
      required: true,
    },
    
    status: {
      type: String,
      enum: ["open", "closed", "expired", "completed"],
      default: "open",
    },
    notes: {
      type: String,
      maxlength: [1000, "Notes can not be more than 1000 characters"],
    },

    image: {
      type: String,
    },
    accepted: {
      type: Boolean,
      default: false,
    },
    otherImages: {
      type: [String],
    },
  },
  { timestamps: true }
);
/* 
PostSchema.index(
  { "bids.technician": 1 },
  { unique:true, 
    partialFilterExpression: { "bids.technician": { $exists: true } } }
);

// ensure each technician can only bid once per post
PostSchema.pre("save", function (next) {
  const technicianIds = this.bids
    .filter((bid) => !!bid.technician)
    .map((bid) => bid.technician.toString());
  if (technicianIds.length !== new Set(technicianIds).size) {
    throw new BadRequestError("Each technician can only bid once per post");
  }

 /*  const post = this
  const acceptedBid = post.bids.find((bid) => bid.accepted);
  console.log(acceptedBid)
  if (acceptedBid) {
    post.status = "closed";
  } 
  next();
}); */

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
