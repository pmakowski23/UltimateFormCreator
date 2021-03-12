import express from 'express'
import cors from 'cors'

import db from "./db/connection"
import userRouter from "./routes/user-router"

db

const app = express()
const port = 5000

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("I'm alive")
})

app.use("/api/users", userRouter)

app.listen(port, () => console.log(`Server running on http://localhost:${port}`))