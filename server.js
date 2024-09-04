// const uploadPhotosAndSaveToMongoDB=require('./helpers/fillingDtes/modifications/photoFile/upload')
// const  insertDataToMongoDB=require('./helpers/fillingDtes/modifications/writeDate')

// insertDataToMongoDB();
// uploadPhotosAndSaveToMongoDB('././public/out',10)
//   .then(photosList => {
//     console.log('Uploaded photos:', photosList);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


const app = require('./app');
// const mongoose = require("mongoose");





// mongoose.connect().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Database connection successful on ${process.env.PORT}!!!`);
  });
// })
// .catch((error) => {
//   console.log(process.env.DB_HOST)
//   console.log(error.message)
//   process.exit(1)
// });