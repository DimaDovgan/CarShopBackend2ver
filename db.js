const mongoose = require('mongoose')

const CarCharacteristycsURI =`${process.env.DB_HOST}/Car_characteristycs`;
const CarShopURI =`${process.env.DB_HOST}/Car_shop`;

const connectDBs = () => {
    try {
        const carCharacteristycs= mongoose.createConnection(CarCharacteristycsURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        const carShop = mongoose.createConnection(CarShopURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        return { carShop, carCharacteristycs }
    } catch (error) {
        console.error(`Error:${error.message}`)
        process.exit(1)
    }
}

module.exports = { connectDBs }