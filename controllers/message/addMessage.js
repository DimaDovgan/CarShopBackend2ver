const {messageShema} = require("../../models/messageRoom");
const {createError}=require("../../helpers");
const { format } = require('date-fns');
const uniqid = require('uniqid'); 


    const addMessage = async (req, res, next) => {
        try {
          const body = req.body;
          const room = await messageShema.find({ _id: body.id });
          if (!(room.length > 0)) {
            throw createError(409, `$Communication room problem`);
          }
          const currentDate = new Date();
          const formattedDate = format(currentDate, 'yyyy.MM.dd.HH.mm');
          const data = await messageShema.updateOne(
            { _id: body.id },
            {
              $addToSet: {
                messages: {
                  date: formattedDate,
                  user: body.user,
                  message: body.message,
                  id: uniqid(),
                  read:false,
                },
              },
            }, { new: true }
          );
          res.status(201).json(data);
        } catch (error) {
          next(error);
        }
      };
    module.exports= addMessage;