require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/router")
const Data = require("./models/data")
//const path = require("path")

const app = express()
const HOST = "127.0.0.1"
const PORT = 4201
const db_name = process.env.DB_NAME
const db_psw = process.env.DB_PSW

const uri = `mongodb+srv://${db_name}:${db_psw}@cluster0.vpjd4.mongodb.net/sarti?retryWrites=true&w=majority`
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.set("view engine", "ejs")
app.use(router)
//app.use("/sartitime", router)
app.use(express.static("public"))

app.listen(PORT, HOST, () =>
  console.log(`Server started @ ${HOST} port ${PORT}`)
)
