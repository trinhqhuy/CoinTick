const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const url = process.env.MONGOOSE_URL;
mongoose.set("strictQuery", false);
async function connectToDatabase() {
  try {
    await mongoose.connect(url);
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
}
module.exports = connectToDatabase;
