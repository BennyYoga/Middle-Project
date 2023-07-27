require("dotenv").config();

const express = require("express");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const database = mongoose.connection;

database.on("error", (error) => console.error(error));
database.once("connected", () => console.log("Connected to Database"));

const app = express();
const router = require("./app/routes/routes");

app.use(fileUpload());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use("/api", router);

app.listen(3000, () => console.log("Server Started at 3000"));
