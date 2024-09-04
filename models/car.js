const {   Schema } = require("mongoose");
const { connectDBs } = require("../db");
const carShema = new Schema({
  brend: {
      type: String,
      required: [true, 'no brend'],
    },
    city:{
      type: String,
      required: [true, 'no city'],
    },
    region:{
      type: String,
      required: [true, 'no region'],
    },
    color:{
      type: String,
      required: [true, 'no color'],
    },
    description:{
      type: String,
      required: [true, 'no description'],
    },
    fuel:{
      type: String,
      required: [true, 'no fuel'],
    },
    imagesList:{
      type: Array,
      required: [true, 'no imagesList'],
    },
    model: {
      type: String,
      required: [true, 'no brend'],
    },
    datepublication:{
        type: String,
      required: [true, 'no date public'],
    },
    transmission:{
      type: String,
      required: [true, 'no transmission'],
    },
    wheelDrive:{
      type: String,
      required: [true, 'nowhellDrive'],
    },
    year:{
        type: Number,
      required: [true, 'no year'],
    },
    // generation:{
    //     type: String,
    //     required: [true, 'no generation'],
    // },
    engineV:{ 
        type: Number,
        required: [true, 'no engineV'],
    },
    power:{
        type: String,
        required: [true, 'no pover'],
    },
    price:{
      type: Number,
      required: [true, 'no price'],
  },
    owner:{
    type:Schema.Types.ObjectId,
    ref:"users",
    },
    range:{
      type: Number,
      required: [true, 'no range'],
  },
    

},{versionKey:false,timestamps:true})

const { carShop, carCharacteristycs }=connectDBs()
// const Car = carShopConnection.model("Car", carShema);
module.exports = {
  Car:carShop.model('Car',carShema)
};