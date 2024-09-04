const {messageShema} = require("../../models/messageRoom");
 const {Car}=require("../../models/car");
const {createError}=require("../../helpers");
const uniqid = require('uniqid'); 
const { format } = require('date-fns');



    const createRoomForSeller= async (req, res, next) => {
        try {
            const buyerId =req.params.id;
            const carId =req.params.idCar;

            const { _id: sellerId } = req.user;
            
            console.log("sellerId:",sellerId,"buyerId:",buyerId,"carId",carId);
            const room = await messageShema.find({
                $and: [
                  { sellerId: sellerId },
                  { buyerId: buyerId },
                  { carId:carId},
                ]
              });
              console.log(room,"rooom")
              if (room.length>0) {
                console.log("room[0]", room[0])
                res.status(200).json(room[0]);
              }else{
              const car = await  Car.findOne({ _id: carId});
              if (!car) {
                throw createError(404, "Car not found");
              }
              // const currentDate = new Date();
              // const formattedDate = format(currentDate, 'yyyy.MM.dd.HH.mm');  
              // const newRoom =await messageShema.create({buyerId,sellerId,carId,creationDate:formattedDate,roomId:uniqid()});
              res.status(404).json([]);
              }






            
              
        
        } catch (error) {
            next(error);
        }
            
    }
    module.exports= createRoomForSeller;