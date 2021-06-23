const express = require("express")
const router = express.Router()
const Data = require("./../models/data")

router.get("/", async (req, res) => {
  const all = await Data.find().sort({ date: "desc" })
  //res.render("public/js/chart", { datas: all })
  res.render("index", { datas: all })
})

module.exports = router
