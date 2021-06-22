const express = require("express")
const router = express.Router()
const Data = require("./../models/data")

router.get("/", async (req, res) => {
  const data = await Data.findOne().sort({ date: "desc" })
  //console.log("data" + data)
  res.render("index", { lastData: data })
})

// router.get("/all", async (req, res) => {
//   const data = await Data.find().sort({ date: "desc" })
//   //console.log("data" + data)
//   res.render("index", { datas: data })
// })

module.exports = router
