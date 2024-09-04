const {Modifacation}=require('../../characteristycs_models/modification');
const getModification= async (req, res, next) => {
    try {
        const idBrend =req.params.brandId;
        const idModel=req.params.modelId;
        const generationId=req.params.generationId;
      console.log(idModel,"---id model",idBrend,"---idBrend");
      const list = await Modifacation.find({brandId:idBrend,modelId:idModel,generationId:generationId});
      res.json({
        cars: list});
    } catch (error) {
      next(error);
    }
    }
    module.exports = getModification;