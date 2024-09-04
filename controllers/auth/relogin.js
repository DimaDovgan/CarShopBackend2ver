const { createError } = require("../../helpers");
const {User}=require("../../models/user");
const jwt = require("jsonwebtoken");

const reLogin = async (req, res,next) => {
  console.log("loginrouth",req.body)
    try {
        const { email} = req.body;

      const auth = await User.findOne({ email: email });
      console.log(auth,"auth1")
      if (!auth) {
        throw createError(401, `${email} wrong`);
        }
        const payload = {
            id:auth._id
        }
        const token= jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"1h"})
        await User.findByIdAndUpdate(auth._id,{token})  
      res.json({
            token:token,
            user: { email: auth.email,avatarUrl:auth.avatarUrl,name: auth.name, subscription: auth.subscription ,favoriteCar:auth.favoriteCar}
        });
    } catch (error) {
      console.log("error")
   next(error);
  }
  
}
module.exports = reLogin;