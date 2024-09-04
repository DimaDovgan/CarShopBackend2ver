const {Car} = require("../../models/car");
const { createError } = require("../../helpers");

const deleteSellCar = async (req, res, next) => {
  try {
    const { id: carId } = req.params;
    const { id: ownerId } = req.user;
    console.log("Car ID to delete:", carId);
    console.log("Owner ID:", ownerId);
    const car = await Car.findOne({ _id: carId, owner: ownerId });
    if (!car) {
      throw createError(404, "Car not found or you are not the owner");
    }
    await Car.findByIdAndDelete(carId);
    res.status(200).json({ message: "Car deleted successfully" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = deleteSellCar;