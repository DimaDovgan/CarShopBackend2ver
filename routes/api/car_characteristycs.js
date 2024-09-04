const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/car_characteristycs");
router.get('/getBrends', ctrl.getAllBrend);
router.get('/getModel/:id',ctrl.getAllModel);
router.get('/getModification/:brandId/:modelId/:generationId',ctrl.getModification);
router.get('/getCharacteristics/:brandId/:modelId/:modificationId/:generationId',ctrl.getCharacteristics)


module.exports = router;