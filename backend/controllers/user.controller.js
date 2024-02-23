const User = require("../models/user.model");

const userController = {
  getUsers: async (req, res) => {
    try {
      const loggoedInUserId = req.user._id;
        console.log(loggoedInUserId)
      const allUsers = await User.find({
        _id: { $ne: loggoedInUserId },
      }).select("-password");

      res.status(200).json({ users: allUsers });
    } catch (error) {
      console.log("err", error.message);
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = userController;
