// models
const mongoose = require("mongoose");

const name = new mongoose.Schema({
  hnId: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  url: String,
  createdAt: { type: Date, default: Date.now },
});

const Name = mongoose.model("Name", name);

module.exports = Name;