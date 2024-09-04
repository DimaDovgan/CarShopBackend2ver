const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/car");
const {auth}=require("../../middlewares");
router.post('/createCar',auth, ctrl.createSellCar);
router.put('/fixCar/:id',auth, ctrl.FixSellCar);
router.get('/getCar', ctrl.getAllcar);
router.get('/getCar/:id',ctrl.getCarById);
router.get('/getOwnerCar',auth,ctrl.getOwnerCar);
router.delete("/deleteCar/:id",auth,ctrl.deleteSellCar);



module.exports = router;