const {  model, Schema } = require("mongoose");
const { connectDBs } = require("../db");
const messageRoomShema = new Schema({
    buyerId: {
      type: String,
      required: [true, 'no buyerId'],
    },
    sellerId:{
      type: String,
      required: [true, 'no sellerId'],
    },
    carId:{
      type: String,
      required: [true, 'no buyerId'],
    },
    creationDate:{
        type: String,
      required: [true, 'no creationDate'],
    },
    messages:{
        type: Array,
        required: [true, 'Email is required'],
        default: [],
      },
    roomId:{
      type: String,
      required: [true, 'no roomId'],
    },
    sellerIsOnline:{
      type:Boolean,
      required: [true, 'no sellerOnline'],
    },
    buyerIsOnline:{
      type:Boolean,
      required: [true, 'no buyerIsOnline'],
    }

    
},{versionKey:false,timestamps:true})

const { carShop, carCharacteristycs }=connectDBs();
module.exports = {
  messageShema:carShop.model("MesageRooms", messageRoomShema)
};