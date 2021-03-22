import User from '../models/users/user-model'
import { checkIfUnique } from '../helpers/validators'
import {
  factoryCreateEndpoint,
  factoryDeleteEndpoint,
  factoryGetAllEndpoint,
  factoryGetOneByIdEndpoint,
  factoryUpdateEndpoint,
} from '../helpers/ctrl-factory'
import { anyOfTypes } from '../helpers/models';
import { IAdditionalLogicElement, IAdditionalLogic, ILogic, IAdditionalValues } from '../helpers/additionalLogic';

const checkTokenIfUnique: IAdditionalLogicElement<anyOfTypes<ILogic>, IAdditionalValues["checkIfUnique"]> = {
  validator: checkIfUnique,
  additionalVariables: {
    model: User,
    key: "token"
  }
}

// POST /api/users
const createValidation: IAdditionalLogic = [
  checkTokenIfUnique
]
export const createUser = factoryCreateEndpoint(User, createValidation);

// GET /api/users
export const getUsers = factoryGetAllEndpoint(User)

// GET /api/users/:id
export const getUserById = factoryGetOneByIdEndpoint(User)

// PUT /api/users/:id
export const updateUser = factoryUpdateEndpoint(User)

// DELETE /api/users/:id
export const deleteUser = factoryDeleteEndpoint(User)