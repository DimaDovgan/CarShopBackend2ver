//const createError = require("./helpers");
// const http = require("http");
// const socketIO = require("socket.io");
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

// // const fileUpload=require('express-fileupload');


const indexRouter = require('./routes/api/leson');
const usersRouter = require('./routes/api/auth');
const carRouter = require('./routes/api/car');
const messageRouter= require('./routes/api/message');
const characteristycs=require('./routes/api/car_characteristycs');
 

const app = express();
//
// const server = http.createServer(app);  // Create an HTTP server

// const io = socketIO(server, {
//   cors: {
//     origin: 'http://localhost:3000/',  // Update this to match your allowed origins
//   },
// });
///

app.use(cors({
  origin: '*'
}));
// app.use(cors());
// app.use(function(req,res,next){
//   res.header("Access-Control-Allow-Origin","*");
//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH"
//   );
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin,X-Requested-With,Content-Type,Accept,Authorization"
//   );
//   next();
// })
 app.use(logger('dev'));
 app.use(express.json());
 app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
 app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/leson', indexRouter);
app.use('/api/auth', usersRouter);
app.use('/api/car', carRouter);
app.use('/api/message', messageRouter);
app.use('/api/carcharacteristycs',characteristycs);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const {status = 500, message = "Server error"} = err;
  res.status(status).json({message})
})


module.exports = app;





