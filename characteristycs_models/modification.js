const {   Schema } = require("mongoose");
const { connectDBs } = require("../db");
const modifacationShema = new Schema({
    modificationId: { type: Number, required: true }, // Ідентифікатор модифікації
    brandId: { type: Number, required: true }, // Ідентифікатор бренду
    modelId: { type: Number, required: true }, // Ідентифікатор моделі
    generationId: { type: Number, required: true }, // Ідентифікатор покоління
    power: { type: Number }, // Потужність
    powerType: { type: String, default: 'к.с.' }, // Тип потужності (з можливістю за замовчуванням)
    modifString:{ type: String },
    startYear: { type: String }, // Рік початку випуску
    endYear: { type: String },// Рік завершення випуску
    transmission:{ type: String },
    wheelDrive:{ type: String },
 },{versionKey:false,timestamps:true})

const { carShop, carCharacteristycs }=connectDBs();
module.exports = {
    Modifacation:carCharacteristycs.model('Modification_type3',modifacationShema,'modification_type3')
};