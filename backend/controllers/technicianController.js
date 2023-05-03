const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const Technician = require("../models/Technician");
const User = require("../models/Customer");


const getAllTechnician = async(req, res)=>{
  const technicians = await Technician.find({})
  res.status(StatusCodes.OK).json({success: true , nbHits:technicians.length,technicians})
}
module.exports = { getAllTechnician};
