const {   Schema } = require("mongoose");
const { connectDBs } = require("../db");
const brendShema = new Schema({
    brendId: {
      type: Number,
      required: [true, 'no brend'],
    },
    titlebrend: {
        type: String,
        required: [true, 'no brendTitle'],
      },
},{versionKey:false,timestamps:true})

const { carShop, carCharacteristycs }=connectDBs();
module.exports = {
  Brend:carCharacteristycs.model('Brend',brendShema,'brend')
};