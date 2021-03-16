import express from 'express'
import { createSelect, deleteSelect, getSelectById, getSelects, updateSelect } from '../controllers/select-ctrl'

const router = express.Router()

// Create select
router.post("/", createSelect)

// Get all selects
router.get("/", getSelects)

// Get select by id
router.get("/:id", getSelectById)

// Update select
router.put('/:id', updateSelect)

// Delete select
router.delete('/:id', deleteSelect)

export default router