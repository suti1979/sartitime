require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/router")

const app = express()
const HOST = "127.0.0.1"
const PORT = 4201
const db_name = process.env.DB_NAME
const db_psw = process.env.DB_PSW

const uri = `mongodb+srv://${db_name}:${db_psw}@cluster0.vpjd4.mongodb.net/sarti?retryWrites=true&w=majority`
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.error("Database err: " + err)
  })

app.set("view engine", "ejs")

app.use(express.static("public"))
//afrer static
app.use(router)
//err handle next()
app.use((err, req, res, next) => {
  res.status(err).send(err + "... Something broke or Unauthorized, sorry!")
})

app.listen(PORT, HOST, () => console.log(`Server started @ ${HOST} port ${PORT}`))
