import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()
const port = 5001

app.get("/", (req, res) => {
  res.send("I'm alive")
})

app.listen(port, () => console.log(`Server running on port ${port}`))