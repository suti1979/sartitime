const express = require("express")
const router = express.Router()
const Data = require("./../models/data")

router.get("/", async (req, res) => {
  const all = await Data.find().sort({ date: "desc" })
  res.render("index", { datas: all, order: convertChartData(all) })
})

//todo move to a separate file, when working! ;)
function convertChartData(rows) {
  const day = rows.map((row) => row.date.getDay())
  const start = rows.map((row) => row.date.getHours())
  const time = rows.map((row) => row.time)

  return {
    x: day,
    y: start,
    r: time,
  }
}

module.exports = router
