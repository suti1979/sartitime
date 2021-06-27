const express = require("express")
const router = express.Router()
const Data = require("./../models/data")

router.get("/", async (req, res) => {
  const all = await Data.find().sort({ date: "desc" })
  const order = convertChartData(all)
  console.log(all)
  res.render("index", { datas: all, order: order })
})

//TODO move to a separate file, when working properly! ;)
function convertChartData(rows) {
  let organised = []

  rows.forEach((row) => {
    let r = { x: row.date.getDay(), y: row.date.getHours(), r: row.time }

    organised.push(r)
  })
  //console.log(organised)
  return organised
}

module.exports = router
