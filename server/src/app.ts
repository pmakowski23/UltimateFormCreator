/* eslint-disable no-console */
import express from 'express'
import cors from 'cors'

import { initMongoConnection } from './db/connection'
import userRouter from "./routes/users/user-router"
import websiteRouter from "./routes/users/website-router"
import formRouter from './routes/forms/form-router'
import formFieldRouter from './routes/forms/formField-router'
import selectRouter from './routes/forms/select-router'

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

const runApp = async (app: express.Application) => {
  await initMongoConnection()
  app.listen(port, () => console.log(`Server running on http://localhost:${port}`))
}

runApp(app)