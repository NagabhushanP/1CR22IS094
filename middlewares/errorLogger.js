const { createLogger, transports, format } = require("winston")
const path = require("path")

const errorLogger = createLogger({
  level: "error",
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.File({ filename: path.join(__dirname, "../error.log") })
  ]
})

module.exports = (err, req, res, next) => {
  errorLogger.error({
    message: err.message,
    stack: err.stack,
    method: req.method,
    url: req.url
  })
  res.status(500).json({ error: "Internal Server Error" })
}
