const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const authRoute = require("./routes/auth.routes");
const messageRoute = require("./routes/message.routes");
const userRoute = require("./routes/user.routes");

const cookieParser = require("cookie-parser");

const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
    res.send("Hello World");
});
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
