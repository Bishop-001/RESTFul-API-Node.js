const express = require("express");
const { default: mongoose } = require("mongoose");

const cryptoSchema = new mongoose.Schema({
  ranking: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  marketCap: {
    type: Number,
    required: true,
    trim: true,
  },
});

// We are creating collections.
const CryptoRank = new mongoose.model("CryptoRank", cryptoSchema);

module.exports = CryptoRank;
