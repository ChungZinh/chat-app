const monggose = require("mongoose");

const ConversationSchema = monggose.Schema(
  {
    participants: [
      {
        type: monggose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    messages: [
      {
        type: monggose.Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
  },
  { timestamps: true }
);

module.exports = monggose.model("Conversation", ConversationSchema);
