import Form from '../models/forms/form-model'
import {
  factoryCreateEndpoint,
  factoryDeleteEndpoint,
  factoryGetAllEndpoint,
  factoryGetOneByIdEndpoint,
  factoryUpdateEndpoint
} from '../helpers/ctrl-factory'

// POST /api/forms
export const createForm = factoryCreateEndpoint(Form)

// GET /api/forms
export const getForms = factoryGetAllEndpoint(Form)

// GET /api/forms/:id
export const getFormById = factoryGetOneByIdEndpoint(Form)

// PUT /api/forms/:id
export const updateForm = factoryUpdateEndpoint(Form)

// DELETE /api/forms/:id
export const deleteForm = factoryDeleteEndpoint(Form)