import { Request, Response } from 'express'
import User, { IUser } from '../models/users/user-model'
import { checkIfUnique } from '../helpers/validators'
import {
  factoryCreateEndpoint,
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
export const deleteUser = async (req: Request, res: Response) => {
  await User.findByIdAndDelete(req.params.id, req.body, (error, user) => {
    if (error) {
      return res.status(400).json({ success: false, error })
    }

    return res.status(204).json({ success: true, message: "user deleted succesfully" })
  })
}