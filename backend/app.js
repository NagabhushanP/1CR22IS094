const express = require("express")
const path = require("path")
const requestLogger = require("../middlewares/requestLogger")
const errorLogger = require("../middlewares/errorLogger")
const routes = require("./routes")

const app = express()
app.use(express.json())
app.use(requestLogger)

app.use(express.static(path.join(__dirname, "../public")))

app.use("/", routes)
app.use(errorLogger)

module.exports = app
