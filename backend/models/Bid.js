const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BidSchema = new Schema({
  technician: {
    type: mongoose.Schema.ObjectId,
    ref: "Technician",
  },
  post: {
    type: mongoose.Schema.ObjectId,
    ref: "Post",
  },
  amount: {
    type: Number,
    required: true,
  },
  bidMessage: {
    type: String,
    required: true,
    maxlength: [1000, "Description can not be more than 1000 characters"],
  },

  bidAccepted: {
    type: Boolean,
    default: false,
  },
});

const Bid = mongoose.model("Bid", BidSchema);

module.exports = Bid;
