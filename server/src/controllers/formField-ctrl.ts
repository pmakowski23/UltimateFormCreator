import FormField from '../models/forms/formField-model'
import {
  factoryCreateEndpoint,
  factoryDeleteEndpoint,
  factoryGetAllEndpoint,
  factoryGetOneByIdEndpoint,
  factoryUpdateEndpoint
} from '../helpers/ctrl-factory'
import { IAdditionalLogicElement, ILogic, IAdditionalLogic } from '../helpers/additionalLogic'
import { anyOfTypes } from '../helpers/models'
import { checkIfMaxIsLoverThanMin, checkIfRegexIsValid } from '../helpers/validators'

// POST /api/formFields
const checkMaxIsHeigher: IAdditionalLogicElement<anyOfTypes<ILogic>> = {
  validator: checkIfMaxIsLoverThanMin,
  additionalVariables: undefined
}
const checkRegexIfIsValid: IAdditionalLogicElement<anyOfTypes<ILogic>> = {
  validator: checkIfRegexIsValid,
  additionalVariables: undefined
}
const createValidation: IAdditionalLogic = [
  checkMaxIsHeigher,
  checkRegexIfIsValid,
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