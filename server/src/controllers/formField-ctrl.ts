import FormField from '../models/forms/formField-model'
import {
  factoryCreateEndpoint,
  factoryDeleteEndpoint,
  factoryGetAllEndpoint,
  factoryGetOneByIdEndpoint,
  factoryUpdateEndpoint,
  IAdditionalLogic
} from '../helpers/ctrl-factory'

// POST /api/formFields
export const createFormField = factoryCreateEndpoint(FormField)

// GET /api/formFields
export const getFormFields = factoryGetAllEndpoint(FormField)

// GET /api/formFields/:id
export const getFormFieldById = factoryGetOneByIdEndpoint(FormField)

// PUT /api/formFields/:id
export const updateFormField = factoryUpdateEndpoint(FormField)

// DELETE /api/formFields/:id
export const deleteFormField = factoryDeleteEndpoint(FormField)