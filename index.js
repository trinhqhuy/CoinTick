const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const authRoute = require("./routers/user.js");
const connectToDatabase = require("./config/database.js");
const bodyParser = require("body-parser");
app.use(express.static(process.cwd() + "/views"));

// Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routers
app.use("/v1/auth", authRoute);

// Database
connectToDatabase();

// Start server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
