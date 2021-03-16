import express from 'express'
import { createReceivedForm, deleteReceivedForm, getReceivedFormById, getReceivedForms, updateReceivedForm } from '../controllers/receivedForm-ctrl'

const router = express.Router()

// Create receivedForm
router.post("/", createReceivedForm)

// Get all receivedForms
router.get("/", getReceivedForms)

// Get receivedForm by id
router.get("/:id", getReceivedFormById)

// Update receivedForm
router.put('/:id', updateReceivedForm)

// Delete receivedForm
router.delete('/:id', deleteReceivedForm)

export default router