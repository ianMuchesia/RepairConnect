const { BadRequestError, NotFoundError, UnauthenticatedError } = require("../errors")
const User = require("../models/User")



const registerUser = async(req, res)=>{
    const {name , email , password, avatar} = req.body

    const emailAlreadyExist = await User.findOne({email})
    if(emailAlreadyExist){
        throw new BadRequestError("Email already exist")
    }

    const user = await User.create({
        name , email , password , avatar
    })


    res.status(StatusCodes.CREATED).json({ success: true, user });
}




const login = async (req, res) => {
    const { email, password } = req.body;


    const user = await User.findOne({ email });
    if (!user) {
        throw new NotFoundError(`no user found with email:${email}`)

    }
    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
        throw new UnauthenticatedError("password and email did not match")
    }

    res.status(StatusCodes.CREATED).json({ success: true, user });
}

const logout = async (req, res) => {
    
      res.cookie("token", "logout", {
        httpOnly: true,
        expires: new Date(Date.now() + 1000), //expiresin one second
      });
      res.status(StatusCodes.OK).json({ success: true, msg: "user logged out!" });
   
  };



  module.exports = {logoutUser, registerUser , login}
  