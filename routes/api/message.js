const express = require('express');
const ctrl=require("../../controllers/message")
 const { auth } = require("../../middlewares");
 const router = express.Router();


router.get('/createRoom/:id/:idCar' ,auth,ctrl.createRoom);
router.get('/createRoomForSeller/:id/:idCar' ,auth,ctrl.createRoomForSeller);
router.get('/getRoomByCar/:idCar' ,auth,ctrl.GetRoomByCarIdSeller);
router.post('/addMessage' ,auth,ctrl.addMessage);

module.exports = router;
