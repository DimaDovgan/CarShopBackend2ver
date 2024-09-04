const {Model}=require('../../characteristycs_models/model');
const getAllModel= async (req, res, next) => {
    try {
        const id =req.params.id;
      console.log(id,"id brend--")
      const list = await Model.find({brandId:id});
      res.json({
        cars: list});
    } catch (error) {
      next(error);
    }
    }
    module.exports = getAllModel;