const express = require("express")
const app = express()
const PORT = 5000
app.get("/", (req, res) => {
  res.send("hey there cutie")
})
app.listen(PORT, () => {
  console.log(`server started at ${PORT}`)
})