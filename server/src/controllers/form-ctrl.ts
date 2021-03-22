import Form from '../models/forms/form-model'
import {
  factoryCreateEndpoint,
  factoryDeleteEndpoint,
  factoryGetAllEndpoint,
  factoryGetOneByIdEndpoint,
  factoryUpdateEndpoint
} from '../helpers/ctrl-factory'
import { IAdditionalLogicElement, IAdditionalLogic, ILogic, IAdditionalValues } from '../helpers/additionalLogic';
import { anyOfTypes } from '../helpers/models';
import { checkIfUnique } from '../helpers/validators';

// POST /api/forms
const checkNameIfUnique: IAdditionalLogicElement<anyOfTypes<ILogic>, IAdditionalValues["checkIfUnique"]> = {
  validator: checkIfUnique,
  additionalVariables: {
    model: Form,
    key: "name"
  }
}
const checkGenIdIfUnique: IAdditionalLogicElement<anyOfTypes<ILogic>, IAdditionalValues["checkIfUnique"]> = {
  validator: checkIfUnique,
  additionalVariables: {
    model: Form,
    key: "genId"
  }
}
const createValidation: IAdditionalLogic = [
  checkNameIfUnique,
  checkGenIdIfUnique
]
export const createForm = factoryCreateEndpoint(Form, createValidation)

// GET /api/forms
export const getForms = factoryGetAllEndpoint(Form)

// GET /api/forms/:id
export const getFormById = factoryGetOneByIdEndpoint(Form)

// PUT /api/forms/:id
export const updateForm = factoryUpdateEndpoint(Form)

// DELETE /api/forms/:id
export const deleteForm = factoryDeleteEndpoint(Form)