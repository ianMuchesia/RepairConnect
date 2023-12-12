const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");
const Technician = require("../models/Technician");




const getSingleTechnician = async (req, res) => {
  const { id: userID } = req.params;
  const technician = await Technician.findOne({ _id: userID }).select(
    "-password"
  ).populate('location', 'name lat lon');
  if (!technician) {
    throw new NotFoundError(`user with id:${userID} not found`);
  }



  res.status(StatusCodes.OK).json({ success: true, user:technician });
};

const getAllTechnicians = async (req, res) => {
  const { location, search, sort } = req.query;

  const queryObject = {};

  if (location) {
    queryObject.location = location;
  }

  if (search) {
    queryObject.name = { $regex: search, $options: "i" };
  }

  let result = Technician.find(queryObject).select('name location shop avatar').populate('location', 'name lat lon');

  if (sort) {
    const sortArray = sort.split(",").join(" ");
    result = result.sort(sortArray);
  } else {
    result = result.sort("name");
  }

  const technicians = await result;

  res.status(StatusCodes.OK).json({ success: true, technicians });
};
module.exports = { getAllTechnicians, getSingleTechnician };
