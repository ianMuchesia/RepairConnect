const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError, UnauthenticatedError } = require("../errors");
const Technician = require("../models/Technician");
const User = require("../models/User");

const { createToken, attachCookiesToResponse } = require("../utils");
const cloudinary = require("cloudinary").v2;

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});




const registerTechnician = async (req, res) => {
  const {
    name,
    email,
    avatar,
    password,
    location,
    shopImages,
    shopName:shop,
    description,
  } = req.body;
 

  const existingEmail = await Technician.findOne({email})

  if(existingEmail){
    throw new BadRequestError("Email already exists")
  }

  const isUser = await User.findOne({email})
  if(isUser){
    throw new BadRequestError("You are already registered as a user")
  }
  //destructuring
  const [responseAvatar, responseShopImage] = await Promise.all([
    cloudinary.uploader.upload(avatar, {
      folder: "avatars",
      public_id: `${name}-avatar`,
    }),
    cloudinary.uploader.upload(shopImages, {
      folder: "TechnicianShop",
      public_id:`${shop}-shop`,
    })
  ]);



  const technician = await Technician.create({
    name,
    email,
    description,
    password,
    shop,
    avatar:responseAvatar.secure_url,
    shopImages:[responseShopImage.secure_url],
    location,
  });

  const tokenTechnician = createToken(technician)
  attachCookiesToResponse({ res, technician: tokenTechnician });
  res.status(StatusCodes.CREATED).json({success:true, tokenTechnician})
};


const registerUser = async(req, res)=>{
    const {name , email , password, avatar} = req.body

    const emailAlreadyExist = await User.findOne({email})
    if(emailAlreadyExist){
        throw new BadRequestError("Email already exist")
    }

    const user = await User.create({
        name , email , password , avatar
    })

    const tokenUser = createToken(user)

    attachCookiesToResponse({res, user:tokenUser})


    res.status(StatusCodes.CREATED).json({ success: true, tokenUser });
}




const login = async (req, res) => {
    const { email, password } = req.body;


    const user = await User.findOne({ email });
    
    const technician = await Technician.findOne({email})
    

    if(!user && !technician){
      throw new NotFoundError(`no account found with email: ${email}`)
    }
    if(user){
      console.log("user")
      const isPasswordCorrect = await user.comparePassword(password);

      if (!isPasswordCorrect) {
          throw new UnauthenticatedError("password and email did not match")
      }
  
      const tokenUser = createToken(user)
  
      attachCookiesToResponse({res, user:tokenUser})
  
  
      res.status(StatusCodes.CREATED).json({ success: true, tokenUser });
    }
    if(technician){
     
      console.log("yess")
      const isPasswordCorrect = await technician.comparePassword(password);

      if (!isPasswordCorrect) {
          throw new UnauthenticatedError("password and email did not match")
      }
  
      const tokenTechnician = createToken(technician)
  
      attachCookiesToResponse({res, user:tokenTechnician})
  
  
      res.status(StatusCodes.CREATED).json({ success: true, tokenTechnician }); 
    }
   
}



const logout = async (req, res) => {
    
      res.cookie("token", "logout", {
        httpOnly: true,
        expires: new Date(Date.now() + 1000), //expiresin one second
      });
      res.status(StatusCodes.OK).json({ success: true, msg: "user logged out!" });
   
  };



  module.exports = {logout, registerUser , login, registerTechnician}
  