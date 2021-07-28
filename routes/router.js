const express = require("express")
const router = express.Router()
const Data = require("./../models/data")

router.get("/", async (req, res) => {
  const lastCheck = await Data.findOne().sort({ date: "desc" })
  const count = await Data.countDocuments()
  res.render("index", { lastCheck: lastCheck, count: count })
})

router.get("/api", async (req, res) => {
  const all = await Data.find()
  res.json(all)
})

router.get("/api_stat", async (req, res) => {
  const all = await Data.find().sort({ time: "asc" })
  res.json(all)
})

module.exports = router
