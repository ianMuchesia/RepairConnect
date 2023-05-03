const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const Technician = require("../models/Technician");
const User = require("../models/Customer");
const checkPermission = require("../utils/checkPermission");



const getAllTechnician = async(req, res)=>{
  const technicians = await Technician.find({})
  res.status(StatusCodes.OK).json({success: true , nbHits:technicians.length,technicians})
}

const getSingleTechnician = async(req, res)=>{
  const { id: userID } = req.params;
  const technician = await Technician.findOne({ _id: userID }).select(
    "-password"
  );
  if(!technician){
    throw new NotFoundError(`user with id:${userID} not found` )
  }
 
  checkPermission(req.user, technician._id);

  res.status(StatusCodes.OK).json({success: true , user:technician})
}
module.exports = { getAllTechnician , getSingleTechnician};
