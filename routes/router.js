const express = require("express")
const router = express.Router()
const Data = require("./../models/data")

router.get("/", async (req, res) => {
  const all = await Data.find().sort({ date: "desc" })
  res.render("index", { datas: all })
})

router.get("/api", async (req, res) => {
  const all = await Data.find().sort({ date: "desc" })
  res.send({ datas: all })
})

module.exports = router

// rows.forEach((row) => {
//   let r = { x: row.date.getDay(), y: row.date.getHours(), r: row.time }
//   organised.push(r)
// })
