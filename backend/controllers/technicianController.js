const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const Technician = require("../models/Technician");
const User = require("../models/User");
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
  res.status(StatusCodes.CREATED).json({success:true, technician})
};



const getAllTechnician = async(req, res)=>{
  const technicians = await Technician.find({})
  res.status(StatusCodes.OK).json({success: true , technicians})
}
module.exports = { registerTechnician , getAllTechnician};
