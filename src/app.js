const express = require("express");
const db = require("../src/db/connection");
const CryptoRank = require("../src/models/model");
const router = require("../src/router/route");

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`${port} port has been initiated`);
});
