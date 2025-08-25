const express = require("express")
const crypto = require("crypto")

const router = express.Router()

const urlDatabase = {}

router.get("/", (req, res) => {
  res.send("Welcome to URL Shortener! Use POST /shorten to create short links.")
})

router.post("/shorten", (req, res) => {
  const { url } = req.body
  if (!url) return res.status(400).json({ error: "URL is required" })

  const code = crypto.randomBytes(3).toString("hex")
  urlDatabase[code] = url

  res.json({ shortUrl: `http://localhost:3000/${code}` })
})

router.get("/:code", (req, res) => {
  const { code } = req.params
  const longUrl = urlDatabase[code]

  if (!longUrl) return res.status(404).json({ error: "URL not found" })

  res.redirect(longUrl)
})

module.exports = router
