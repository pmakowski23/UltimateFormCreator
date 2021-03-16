import express from 'express'
import { createWebsite, deleteWebsite, getWebsiteById, getWebsites, updateWebsite } from '../controllers/website-ctrl'

const router = express.Router()

// Create website
router.post("/", createWebsite)

// Get all websites
router.get("/", getWebsites)

// Get website by id
router.get("/:id", getWebsiteById)

// Update website
router.put('/:id', updateWebsite)

// Delete website
router.delete('/:id', deleteWebsite)

export default router