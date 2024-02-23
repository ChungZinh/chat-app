const Conversation = require("../models/conversation.model");
const Message = require("../models/message.model");
const messageController = {
  sendMessage: async (req, res) => {
    try {
      const { message } = req.body;
      const receiverId = req.params.id;
      const senderId = req.user._id;

      let conversation = await Conversation.findOne({
        participants: {
          $all: [senderId, receiverId],
        },
      });

      if (!conversation) {
        conversation = await Conversation({
          participants: [senderId, receiverId],
        });
      }

      const newMessage = new Message({
        senderId: senderId,
        receiverId: receiverId,
        message: message,
      });

      if (newMessage) {
        conversation.messages.push(newMessage._id);
      }
      

      await Promise.all([conversation.save(), newMessage.save()]);


      res.json({ message: "Message sent" });
    } catch (error) {
      console.log("err", error.message);
      res.status(500).json({ message: error.message });
    }
    // console.log(req.params.id)
  },
  getMessages: async (req, res) => {
    try {
      
      const userToChatId = req.params.id;
      const senderId = req.user._id;


      const conversation = await Conversation.findOne({
        participants: {
          $all: [senderId, userToChatId],
        },
      }).populate("messages");

      res.status(200).json({ messages: conversation.messages });

    } catch (error) {
      console.log("err", error.message);
      res.status(500).json({ message: error.message });
    }
  },

};

module.exports = messageController;
