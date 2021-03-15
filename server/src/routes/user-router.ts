import express from 'express'
import { createUser, deleteUser, getUserById, getUsers, updateUser } from '../controllers/user-ctrl'

const router = express.Router()

// Create user
router.post("/", createUser)

// Get all users
router.get("/", getUsers)

// Get user by id
router.get("/:id", getUserById)

// Update user
router.put('/:id', updateUser)

export default router