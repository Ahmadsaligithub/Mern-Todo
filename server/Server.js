const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const router = require("./routes/todoRoutes");
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MongoDB_URI)
  .then(() => console.log("Mongo db connected......"))
  .catch((err) => console.log(err.message));

app.use("/api/", router);

app.listen(PORT, (req, res) => {
  console.log(`Port running on ....${PORT}`);
});
