const {   Schema } = require("mongoose");
const { connectDBs } = require("../db");
const bodySchema = new Schema({
    Brand: String,
    Model: String,
    CountryOfBrand: String,
    CarClass: String,
    Body: String,
    NumberOfDoors: String,
    NumberOfSeats: String,
    Width: String,
    Length: String,
    Height: String,
    Wheelbase: String,
    FrontTrack: String,
    RearTrack: String,
    MinTrunkVolume: String,
    MaxTrunkVolume: String,
    Clearance: String,
  });
  const engineSchema = new Schema({
    Fuel: String,
    EngineCapacity: String,
    Power: String,
    RPM: String,
    PowerKW: String,
    FuelSystem: String,
    TurbochargerType: String,
    CylinderArrangement: String,
    NumberOfCylinders: String,
    ValvesPerCylinder: String,
    FuelType: String,
  });
  const suspensionSchema = new Schema({
    FrontSuspensionType: String,
    RearSuspensionType: String,
  });
  const transmissionSchema = new Schema({
    TransmissionType: String,
    NumberOfGears: String,
    Drive: String,
  });
  const brakingSystemSchema = new Schema({
    FrontBrakes: String,
    RearBrakes: String,
  });


const modelCharacteristycs = new Schema({
  Body: bodySchema, // Вкладена схема для `Body`
  Engine: engineSchema, // Вкладена схема для `Engine`
  Suspension: suspensionSchema, // Вкладена схема для `Suspension`
  Transmission: transmissionSchema, // Вкладена схема для `Transmission`
  BrakingSystem: brakingSystemSchema, // Вкладена схема для `BrakingSystem`
  brandId: { type: Number, required: true },
  modelId: { type: Number, required: true },
  generationId: { type: Number, required: true },
  modificationId: { type: Number, required: true },
},{versionKey:false,timestamps:true})

const { carShop, carCharacteristycs }=connectDBs();
module.exports = {
  Characteristycs:carCharacteristycs.model('Characteristics',modelCharacteristycs ,'сharacteristics')
};