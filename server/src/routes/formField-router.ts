import express from 'express'
import { createFormField, deleteFormField, getFormFieldById, getFormFields, updateFormField } from '../controllers/formField-ctrl'

const router = express.Router()

// Create formField
router.post("/", createFormField)

// Get all formFields
router.get("/", getFormFields)

// Get formField by id
router.get("/:id", getFormFieldById)

// Update formField
router.put('/:id', updateFormField)

// Delete formField
router.delete('/:id', deleteFormField)

export default router