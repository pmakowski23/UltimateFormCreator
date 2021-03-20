import ReceivedForm from '../models/forms/receivedForm-model'
import {
  factoryCreateEndpoint,
  factoryDeleteEndpoint,
  factoryGetAllEndpoint,
  factoryGetOneByIdEndpoint,
  factoryUpdateEndpoint,
  IAdditionalLogic
} from '../helpers/ctrl-factory'

// POST /api/receivedForms
export const createReceivedForm = factoryCreateEndpoint(ReceivedForm)

// GET /api/receivedForms
export const getReceivedForms = factoryGetAllEndpoint(ReceivedForm)

// GET /api/receivedForms/:id
export const getReceivedFormById = factoryGetOneByIdEndpoint(ReceivedForm)

// PUT /api/receivedForms/:id
export const updateReceivedForm = factoryUpdateEndpoint(ReceivedForm)

// DELETE /api/receivedForms/:id
export const deleteReceivedForm = factoryDeleteEndpoint(ReceivedForm)