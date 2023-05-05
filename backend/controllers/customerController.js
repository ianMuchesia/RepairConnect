const { StatusCodes } = require("http-status-codes");
const Customer = require('../models/Customer')




const getAllCustomer = async (req ,res )=>{
    const customers = await Customer.find({})
    res.status(StatusCodes.OK).json({success:true , customers})
}


module.exports = {getAllCustomer}