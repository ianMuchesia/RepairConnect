const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError, UnauthenticatedError } = require("../errors");
const Technician = require("../models/Technician");
const Customer = require("../models/Customer");

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

  const isCustomer = await Customer.findOne({email})
  if(isCustomer){
    throw new BadRequestError("You are already registered as a Customer")
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
  attachCookiesToResponse({ res, user: tokenTechnician });
  res.status(StatusCodes.CREATED).json({success:true, user:tokenTechnician})
};


const registerCustomer = async(req, res)=>{
    const {name , email , password, avatar} = req.body

    const emailAlreadyExist = await Customer.findOne({email})
    if(emailAlreadyExist){
        throw new BadRequestError("Email already exist")
    }

    const customer = await Customer.create({
        name , email , password , avatar
    })

    const tokenCustomer = createToken(customer)

    attachCookiesToResponse({res, user:tokenCustomer})


    res.status(StatusCodes.CREATED).json({ success: true, user:tokenCustomer });
}




const login = async (req, res) => {
    const { email, password } = req.body;


    const customer = await Customer.findOne({ email });
    
    const technician = await Technician.findOne({email})
    

    if(!customer && !technician){
      throw new NotFoundError(`no account found with email: ${email}`)
    }
    if(customer){
      console.log("Customer")
      const isPasswordCorrect = await Customer.comparePassword(password);

      if (!isPasswordCorrect) {
          throw new UnauthenticatedError("password and email did not match")
      }
  
      const tokenCustomer = createToken(customer)
  
      attachCookiesToResponse({res, user:tokenCustomer})
  
  
      res.status(StatusCodes.CREATED).json({ success: true, user:tokenCustomer });
    }
    if(technician){
     
      console.log("yess")
      const isPasswordCorrect = await technician.comparePassword(password);

      if (!isPasswordCorrect) {
          throw new UnauthenticatedError("password and email did not match")
      }
  
      const tokenTechnician = createToken(technician)
  
      attachCookiesToResponse({res, user:tokenTechnician})
  
  
      res.status(StatusCodes.CREATED).json({ success: true, user:tokenTechnician }); 
    }
   
}

const showUser = async(req, res)=>{

  res.status(StatusCodes.OK).json({success:true, user:req.user})
}

const logout = async (req, res) => {
    
      res.cookie("token", "logout", {
        httpOnly: true,
        expires: new Date(Date.now() + 1000), //expiresin one second
      });
      res.status(StatusCodes.OK).json({ success: true, msg: "Customer logged out!" });
   
  };



  module.exports = {logout, registerCustomer , login, registerTechnician, showUser}
  