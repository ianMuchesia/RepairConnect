const jwt = require('jsonwebtoken');

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  return token;
};


const isTokenValid = ({ token }) => jwt.verify(token, process.env.JWT_SECRET);



const attachCookiesToResponse = ({ res, user }) => {
    const token = createJWT({ payload: user });
  
    const threeDays = 1000 * 60 * 60 * 24*3;
  
    res.cookie('token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + threeDays),
      secure:  process.env.NODE_ENV !== 'production',
      signed: true,
      sameSite:"none", //because of different hosting environment
    });
  };


  module.exports = {
    createJWT,
    isTokenValid,
    attachCookiesToResponse,
  };
  
  