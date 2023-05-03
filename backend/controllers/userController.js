const { StatusCodes } = require("http-status-codes");


const showUser = async(req, res)=>{

    res.status(StatusCodes.OK).json({success:true, user:req.user})
}



module.exports = {showUser}