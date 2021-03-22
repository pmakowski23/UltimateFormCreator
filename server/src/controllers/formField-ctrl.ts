import FormField from '../models/forms/formField-model'
import {
  factoryCreateEndpoint,
  factoryDeleteEndpoint,
  factoryGetAllEndpoint,
  factoryGetOneByIdEndpoint,
  factoryUpdateEndpoint
} from '../helpers/ctrl-factory'
import { IAdditionalLogicElement, ILogic, IAdditionalValues, IAdditionalLogic } from '../helpers/additionalLogic'
import { anyOfTypes } from '../helpers/models'
import { checkIfMaxIsLoverThanMin } from '../helpers/validators'

// POST /api/formFields
const checkMaxIsHeigher: IAdditionalLogicElement<anyOfTypes<ILogic>, IAdditionalValues["checkIfMaxIsLoverThanMin"]> = {
  validator: checkIfMaxIsLoverThanMin,
  additionalVariables: null
}
const createValidation: IAdditionalLogic = [
  checkMaxIsHeigher,
]
export const createFormField = factoryCreateEndpoint(FormField, createValidation)

// GET /api/formFields
export const getFormFields = factoryGetAllEndpoint(FormField)

// GET /api/formFields/:id
export const getFormFieldById = factoryGetOneByIdEndpoint(FormField)

// PUT /api/formFields/:id
export const updateFormField = factoryUpdateEndpoint(FormField)

// DELETE /api/formFields/:id
export const deleteFormField = factoryDeleteEndpoint(FormField)