const express = require("express")
const router = express.Router()
const Data = require("./../models/data")

router.get("/", async (req, res) => {
  const lastCheck = await Data.findOne().sort({ date: "desc" })
  const count = await Data.countDocuments()
  res.render("index", { lastCheck: lastCheck, count: count })
})

router.get("/api", checkApiKey, async (req, res) => {
  await Data.find()
    .then((all) => res.json(all))
    .catch((err) => res.send("Error" + err))
})

router.get("/api_stat", async (req, res) => {
  //console.log(req.query)
  await Data.find()
    .sort({ time: "asc" })
    .then((all) => res.json(all))
    .catch((err) => res.send("Error" + err))
})

function checkApiKey(req, res, next) {
  if (req.query.apikey != "sarti") {
    next(401)
  }
  next()
}

module.exports = router
