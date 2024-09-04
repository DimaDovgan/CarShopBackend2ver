const {   Schema } = require("mongoose");
const { connectDBs } = require("../db");
const modelShema = new Schema({
    generationId: { type: Number, required: true }, // Ідентифікатор покоління
  brandId: { type: Number, required: true }, // Ідентифікатор бренду
  modelId: { type: Number, required: true }, // Ідентифікатор моделі
  name: { type: String, required: true }, // Назва моделі
  bodyType: { type: String, required: true }, // Тип кузова
  startYear: { type: String, required: true }, // Рік початку випуску
  endYear: { type: String },
},{versionKey:false,timestamps:true})

const { carShop, carCharacteristycs }=connectDBs();
module.exports = {
  Model:carCharacteristycs.model('Model',modelShema,'model')
};