import Website from '../models/users/website-model'
import { checkIfUnique } from '../helpers/validators'
import {
  factoryCreateEndpoint,
  factoryDeleteEndpoint,
  factoryGetAllEndpoint,
  factoryGetOneByIdEndpoint,
  factoryUpdateEndpoint,
} from '../helpers/ctrl-factory'
import { anyOfTypes } from '../helpers/models'
import { IAdditionalLogicElement, ILogic, IAdditionalLogic } from '../helpers/additionalLogic'

// POST /api/websites
const checkIfNameIsUnique: IAdditionalLogicElement<anyOfTypes<ILogic>> = {
  validator: checkIfUnique,
  additionalVariables: {
    model: Website,
    key: "name"
  }
}
const checkIfUrlIsUnique: IAdditionalLogicElement<anyOfTypes<ILogic>> = {
  validator: checkIfUnique,
  additionalVariables: {
    model: Website,
    key: "url"
  }
}
const createValidation: IAdditionalLogic = [
  checkIfNameIsUnique,
  checkIfUrlIsUnique
]
export const createWebsite = factoryCreateEndpoint(Website, createValidation)

// GET /api/websites
export const getWebsites = factoryGetAllEndpoint(Website)

// GET /api/websites/:id
export const getWebsiteById = factoryGetOneByIdEndpoint(Website)

// PUT /api/websites/:id
export const updateWebsite = factoryUpdateEndpoint(Website)

// DELETE /api/websites/:id
export const deleteWebsite = factoryDeleteEndpoint(Website)