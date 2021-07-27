const express = require("express")
const router = express.Router()
const Data = require("./../models/data")

router.get("/", async (req, res) => {
  //TODO samples number missing
  const lastCheck = await Data.findOne().sort({ date: "desc" })
  res.render("index", { lastCheck: lastCheck })
})

router.get("/api", async (req, res) => {
  const all = await Data.find().sort({ date: "desc" })
  res.json(all)
})

router.get("/api_stat", async (req, res) => {
  const datas = [
    { x: 0, y: 22, r: 4.4112 },
    { x: 1, y: 19, r: 12.3836 },
    { x: 2, y: 11, r: 6.4043 },
    { x: 3, y: 18, r: 4.2586 },
    { x: 5, y: 13, r: 7.0635 },
    { x: 4, y: 8, r: 4.3819 },
    { x: 6, y: 17, r: 9.4302 },
  ]
  res.json(datas)
})

module.exports = router

// rows.forEach((row) => {
//   let r = { x: row.date.getDay(), y: row.date.getHours(), r: row.time }
//   organised.push(r)
// })
