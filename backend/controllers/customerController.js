const { StatusCodes } = require("http-status-codes");
const Customer = require("../models/Customer");
const { checkPermission } = require("../utils");
const { NotFoundError } = require("../errors");
const Post = require("../models/Post");

const getAllCustomer = async (req, res) => {
  const customers = await Customer.find({});
  res.status(StatusCodes.OK).json({ success: true, customers });
};

const getSingleCustomer = async (req, res) => {
  const { id: userID } = req.params;
  const customer = await Customer.findOne({ _id: userID }).select("-password");
  if (!customer) {
    throw new NotFoundError(`user with id:${userID} not found`);
  }

  checkPermission(req.user, customer._id);

  res.status(StatusCodes.OK).json({ success: true, user: customer });
};



module.exports = { getAllCustomer, getSingleCustomer };
