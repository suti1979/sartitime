const express = require("express")
const router = express.Router()
const Data = require("./../models/data")

router.get("/", async (req, res) => {
  const all = await Data.find().sort({ date: "desc" })
  res.render("index", { datas: all })
})

module.exports = router
