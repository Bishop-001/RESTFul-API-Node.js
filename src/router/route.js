const router = new express.Router();
const express = require("express");
const CryptoRank = require("../models/model");

// Defining the POST request.
router.post("/crypto", async (req, res) => {
  try {
    const crypto = new CryptoRank(req.body);
    console.log(req.body);
    const cryptoData = await crypto.save();
    res.status(201).send(cryptoData);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Handling get request.
router.get("/crypto", async (req, res) => {
  try {
    const getCrypto = await CryptoRank.find({}).sort({ ranking: 1 });
  } catch (e) {
    res.status(400).send(e);
  }
});

// Defining GET request for individual

router.get("/crypto/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getCrypto = await CryptoRank.findById({ _id });
    res.send(getCrypto);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Handling patch request.
router.patch("/crypto/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getCrypto = await CryptoRank.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getCrypto);
  } catch (e) {
    res.status(500).send(e);
  }
});

// Handling Delete request.
router.delete("/crypto/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getCrypto = await CryptoRank.findByIdAndDelete(_id);
    res.send(getCrypto);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
