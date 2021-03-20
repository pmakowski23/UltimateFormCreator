import Select from '../models/forms/select-model'
import {
  factoryCreateEndpoint,
  factoryDeleteEndpoint,
  factoryGetAllEndpoint,
  factoryGetOneByIdEndpoint,
  factoryUpdateEndpoint,
  IAdditionalLogic
} from '../helpers/ctrl-factory'

// POST /api/selects
export const createSelect = factoryCreateEndpoint(Select);

// GET /api/selects
export const getSelects = factoryGetAllEndpoint(Select)

// GET /api/selects/:id
export const getSelectById = factoryGetOneByIdEndpoint(Select)

// PUT /api/selects/:id
export const updateSelect = factoryUpdateEndpoint(Select)

// DELETE /api/selects/:id
export const deleteSelect = factoryDeleteEndpoint(Select)