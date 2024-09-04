const {messageShema} = require("../../models/messageRoom");
const {Car}=require("../../models/car");
const {createError}=require("../../helpers");
const uniqid = require('uniqid'); 
const { format } = require('date-fns');



   const GetRoomByCarIdSeller= async (req, res, next) => {
       try {
        const sellerId =req.user.id;
           const carId =req.params.idCar;
           const room = await messageShema.find({
               $and: [
                 { sellerId: sellerId },
                 { carId: carId }
               ]
             });
             console.log(room,"rooom !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
             if (room.length>0) {
               console.log("room[0]", room)
               res.status(200).json(room);
             
             }else{
             res.status(200).json([]);
             }
             
       
       } catch (error) {
           next(error);
       }
           
   }
   module.exports=  GetRoomByCarIdSeller;