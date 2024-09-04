const { createError } = require("../../helpers");
const bcrypt=require("bcryptjs")
const {User}=require("../../models/user")
const { registerAuthSchema } = require("../../validation/joiValidation");
const gravatar = require("gravatar");

const register = async (req, res, next) => {
    try {
    const {error}=registerAuthSchema.validate(req.body)
    if (error) {
      throw createError(400,"Ошибка от Joi или другой библиотеки валидации")
        }
        const { email,password } = req.body;
      const auth = await User.findOne({ email: email });
      console.log(auth ,"auth ")
      if (auth) {
        throw createError(409, `${email} is use`);
      }
      const hashPassword = await bcrypt.hash(password,10);
       const avatarUrl=gravatar.url(email);
    const result = await User.create({...req.body ,password:hashPassword,avatarUrl} );
      res.status(201).json({
        user: { email: result.email, name:result.name, subscription: result.subscription ,avatarUrl:result.avatarUrl} });
    } catch (error) {
      console.log("error")
   next(error);
  }
}
module.exports = register;