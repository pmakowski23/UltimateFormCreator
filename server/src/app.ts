import express from 'express'
import cors from 'cors'

import db from "./db/connection"
import userRouter from "./routes/user-router"
import websiteRouter from "./routes/website-router"
import formRouter from './routes/form-router'
import formFieldRouter from './routes/formField-router'
import selectRouter from './routes/select-router'

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
app.use("/api/websites", websiteRouter)
app.use("/api/forms", formRouter)
app.use("/api/formFields", formFieldRouter)
app.use("/api/receivedForms", selectRouter)
app.use("/api/selects", selectRouter)

app.listen(port, () => console.log(`Server running on http://localhost:${port}`))