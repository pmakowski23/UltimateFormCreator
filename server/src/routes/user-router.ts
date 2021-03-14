import express from 'express'
import { createUser, getUsers } from '../controllers/user-ctrl'

const router = express.Router()

// Create user
router.post("/", createUser)

// Get all users
router.get("/", getUsers)

export default router