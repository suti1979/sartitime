require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/router")
const Data = require("./models/data")

const app = express()
const HOST = "localhost"
const PORT = 5000
const db_name = process.env.DB_NAME
const db_psw = process.env.DB_PSW

const uri = `mongodb+srv://${db_name}:${db_psw}@cluster0.vpjd4.mongodb.net/sarti?retryWrites=true&w=majority`
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.set("view engine", "ejs")
app.use("/sartitime", router)
app.use(express.static("./public"))

app.listen(PORT, HOST, () =>
  console.log(`Server started @ ${HOST} port ${PORT}`)
)
