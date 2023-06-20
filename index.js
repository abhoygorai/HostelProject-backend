require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connectToMongoDB = require("./db/connect");
const authRoutes = require("./APIS/auth/index");
const bodyParser = require("body-parser");
const cors = require("cors");

const hit = require("./hit");

connectToMongoDB();
const router = express.Router();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);
app.use(
  cors({
    origin: "http://localhost:54998/",
    methods: ["GET", "POST"],
  })
);

router.use("/auth", authRoutes);

app.listen(4000, "0.0.0.0", () => console.log("The server is started in port 4000"));
