const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost:27017/crypto100")
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch((e) => {
    console.log("Not Connected");
  });
