import express from 'express'
import { createUser, getUserById, getUsers } from '../controllers/user-ctrl'

const router = express.Router()

// Create user
router.post("/", createUser)

// Get all users
router.get("/", getUsers)

// Get user by id
router.get("/:id", getUserById)

export default router