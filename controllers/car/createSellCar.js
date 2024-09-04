const {Car} = require("../../models/car");
const { createError } = require("../../helpers");
const {createSellCarSchema}= require("../../validation/joiValidation");
const { format } = require('date-fns');

const createSellCar=async (req, res, next) => {
  try {
    console.log("user id",req.user.id);
    console.log("req.body",req.body);
    const { error } = createSellCarSchema.validate(req.body._original)
    console.log(req.body,"--req.body--")
    if (error) {
      console.log(error);
      throw createError(400, "missing required name field")
    }
    const { id: owner } = req.user;
    console.log(owner);
    const list = await Car.find({ owner});
    console.log(list);
    const currentDate = new Date();
    const formattedTime = format(currentDate, 'dd.MM.yyyy HH:mm');

    const {year,price,engineV}=req.body

    const leson = await Car.create({...req.body,year:parseFloat(year),price:parseFloat(price),engineV:parseFloat(engineV),datepublication:`${formattedTime}`, owner});
    res.status(201).json(leson);
  } catch (error) {
    console.log(error)
    next(error);
  }
  
}
module.exports = createSellCar;