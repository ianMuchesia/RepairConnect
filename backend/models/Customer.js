const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema;

const CustomerSchema = new Schema(
  {
   
    name: {
      type: String,
      required: [true, " Name is required"],
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "please provie valid email",
      ],
      unique: true,
      required:[true, "please provide email"]
    },
    password: {
      type: String,
      required: [true, "please provide password"],
      minlength: 6,
    },
    avatar: {
      type: String,
    },
    role: {
      type: String,
      enum: ["admin", "customer"],
      default: "customer",
    },
    phone: {
      type: String,
      default: "+254",
    },
    location:{
      type:String,
      enum: {
        values: [
          "Kizingo",
          "Majengo",
          "Likoni",
          "Bamburi",
          "Kisauni",
          "Magongo",
          "Mikindani",
          "Nyali",
        ],
        message: "{VALUE} is not supported",
      },
    },
    bio: {
      type: String,
      default: "bio",
      maxlength: 250,
    },
  },
  { timestamps: true }
);



CustomerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});


CustomerSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;
