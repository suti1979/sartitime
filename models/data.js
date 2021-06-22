const mongoose = require("mongoose")

const dataSchema = new mongoose.Schema({
  time: Number,
  date: { type: Date, default: Date.now },
})

module.exports = mongoose.model("sartis", dataSchema) //in the " " the collction name
