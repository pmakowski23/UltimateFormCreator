import User, { IUser } from '../models/users/user-model'
import { checkIfUnique } from '../helpers/validators'
import {
  factoryCreateEndpoint,
  factoryDeleteEndpoint,
  factoryGetAllEndpoint,
  factoryGetOneByIdEndpoint,
  factoryUpdateEndpoint,
  IAdditionalLogic
} from '../helpers/ctrl-factory'

// POST /api/users
const createValidation: IAdditionalLogic = [
  {
    validator: checkIfUnique,
    additionalVariables: {
      model: User,
      key: "token"
    }
  }
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