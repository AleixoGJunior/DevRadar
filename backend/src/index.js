const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb://devradar:devradar@cluster0-shard-00-00-hvcvu.mongodb.net:27017,cluster0-shard-00-01-hvcvu.mongodb.net:27017,cluster0-shard-00-02-hvcvu.mongodb.net:27017/devradar?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log("Server ON");
});
