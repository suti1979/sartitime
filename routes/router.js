const express = require("express")
const router = express.Router()
const Data = require("./../models/data")

router.get("/", async (req, res) => {
  //TODO samples number missing
  const lastCheck = await Data.findOne().sort({ date: "desc" })
  const sample = await Data.countDocuments()
  res.render("index", { lastCheck: lastCheck, count: sample })
})

router.get("/api", async (req, res) => {
  const all = await Data.find().sort({ date: "desc" })
  res.json(all)
})

module.exports = router

// rows.forEach((row) => {
//   let r = { x: row.date.getDay(), y: row.date.getHours(), r: row.time }
//   organised.push(r)
// })
