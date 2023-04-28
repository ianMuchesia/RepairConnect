const {BadRequestError} = require("../errors")

const getTechnician = async(req, res)=>{
    const {name} = req.body
    if(!name){
        throw new BadRequestError("here iam")
    }
    res.send("hello world")
}



module.exports = {getTechnician}