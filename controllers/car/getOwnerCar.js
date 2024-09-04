const {Car} = require("../../models/car");
const { createError } = require("../../helpers");
// const {createSellCarSchema}= require("../../validation/joiValidation");

const getOwnerCar=async (req, res, next) => {
  try {
    console.log("user id",req.user.id);
    console.log("req.body",req.body);
    console.log(req.body,"--req.body--")
    const { id: owner } = req.user;
    console.log(owner,"Owner id");
    const list = await Car.find({ owner});
    console.log(list);
    res.status(200).json(list);
  } catch (error) {
    console.log(error)
    next(error);
  }
  
}
module.exports = getOwnerCar;