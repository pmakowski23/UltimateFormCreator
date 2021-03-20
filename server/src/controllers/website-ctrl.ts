import Website from '../models/users/website-model'
import {
  factoryCreateEndpoint,
  factoryDeleteEndpoint,
  factoryGetAllEndpoint,
  factoryGetOneByIdEndpoint,
  factoryUpdateEndpoint,
  IAdditionalLogic
} from '../helpers/ctrl-factory'

// POST /api/websites
export const createWebsite = factoryCreateEndpoint(Website)

// GET /api/websites
export const getWebsites = factoryGetAllEndpoint(Website)

// GET /api/websites/:id
export const getWebsiteById = factoryGetOneByIdEndpoint(Website)

// PUT /api/websites/:id
export const updateWebsite = factoryUpdateEndpoint(Website)

// DELETE /api/websites/:id
export const deleteWebsite = factoryDeleteEndpoint(Website)