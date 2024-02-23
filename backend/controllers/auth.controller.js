const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const generateToken = require("../jwt/generateToken");
const authController = {
  loginUser: async (req, res) => {
    try {
      const { userName, password } = req.body;

      const user = await User.findOne({ userName });
      const isPasswordMatch =
        user && (await bcrypt.compare(password, user?.password || ""));

      if (!user || !isPasswordMatch) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }

      // GENERATE TOKEN

      generateToken(user._id, res);

      res.status(200).json({
        msg: "Login success",
        user: {
          _id: user._id,
          fullName: user.fullName,
          userName: user.userName,
          profilePicture: user.profilePicture,
        },
      });
    } catch (err) {
      console.log("err", err);
      return res.status(500).json({ msg: err.message });
    }
  },
  signupUser: async (req, res) => {
    try {
      const { fullName, userName, password, confirmPassword, gender } =
        req.body;

      if (password !== confirmPassword) {
        return res.status(400).json({ msg: "Password did not match." });
      }

      if (password.length < 6) {
        return res
          .status(400)
          .json({ msg: "Password must be at least 6 characters long." });
      }

      const user = await User.findOne({ userName });

      if (user) {
        return res.status(400).json({ msg: "Username already exists." });
      }

      // HASH PASSWORD
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const pic = `https://avatar.iran.liara.run/username?username=${fullName}`;

      const newUser = new User({
        fullName,
        userName,
        password: hashedPassword,
        gender,
        profilePicture: pic,
      });

      if (newUser) {
        // GENERATE TOKEN

        generateToken(newUser._id, res);

        await newUser.save();

        res.status(201).json({
          msg: "User registered successfully",
          user: {
            _id: newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
            gender: newUser.gender,
            profilePicture: newUser.profilePicture,
          },
        });
      } else {
        res.status(400).json({ msg: "Something went wrong" });
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  logoutUser: (req, res) => {
    try {
      res.cookie("token", "", {
        httpOnly: true,
        maxAge: 0,
        sameSite: "none",
        secure: true,
        path: "/",
        domain: "localhost",
        expires: new Date(0),
      });
      res.status(200).json({ msg: "Logged out" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = authController;
