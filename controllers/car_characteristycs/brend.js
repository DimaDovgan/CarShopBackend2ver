const {Brend}=require('../../characteristycs_models/brend');

const getAllBrend= async (req, res, next) => {
    try {
      const list = await Brend.find();
      res.json({
        cars: list});
    } catch (error) {
      next(error);
    }
    }
    module.exports = getAllBrend;