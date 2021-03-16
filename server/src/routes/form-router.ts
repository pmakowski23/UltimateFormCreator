import express from 'express'
import { createForm, deleteForm, getFormById, getForms, updateForm } from '../controllers/form-ctrl'

const router = express.Router()

// Create form
router.post("/", createForm)

// Get all forms
router.get("/", getForms)

// Get form by id
router.get("/:id", getFormById)

// Update form
router.put('/:id', updateForm)

// Delete form
router.delete('/:id', deleteForm)

export default router