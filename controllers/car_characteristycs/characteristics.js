const {Characteristycs}=require('../../characteristycs_models/characteristycs');
const getModification= async (req, res, next) => {
    try {
        const idBrend =req.params.brandId;
        const idModel=req.params.modelId;
        const idModification =req.params.modificationId;
        const idGeneration=req.params.generationId;
      console.log(idModel,"---id model",idBrend,"---idBrend",idModification,"idModification",idGeneration,"idGeneration");
      const list = await Characteristycs.find({brandId:idBrend,modelId:idModel, modificationId:idModification,generationId:idGeneration});
      res.json({
        cars: list});
    } catch (error) {
      next(error);
    }
    }
    module.exports = getModification;
