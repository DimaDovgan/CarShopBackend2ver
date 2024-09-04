const {Car} = require("../../models/car");
const { createError } = require("../../helpers");
const {createSellCarSchema}= require("../../validation/joiValidation");
const { format } = require('date-fns');


const FixSellCar=async (req, res, next) => {
  try {
    const id =req.params.id;
    console.log("user id",req.user.id);
    console.log("req.body",req.body);
    const { error } = createSellCarSchema.validate(req.body._original)
    console.log(req.body,"--req.body--")
    if (error) {
        console.log(error);
        throw createError(400, "missing required name field")
      }
   
    const leson = await Car.findByIdAndUpdate(id, req.body, { new: true });
    res.status(201).json(leson);
  } catch (error) {
    console.log(error)
    next(error);
  }
  
}
module.exports = FixSellCar;