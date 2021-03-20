import { Request, Response } from 'express'
import User, { IUser } from '../models/users/user-model'
import { checkIfUnique } from '../helpers/validators'
import {
  factoryCreateEndpoint,
  factoryGetAllEndpoint,
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
export const getUserById = async (req: Request, res: Response) => {
  await User.findOne({ _id: req.params.id }, (error: Error, user: IUser) => {
    if (error) {
      return res.status(400).json({ success: false, error })
    }
    if (!user) {
      return res.status(404).json({ success: false, error: "User with this Id not found." })
    }

    return res.status(200).json({ success: true, data: user })
  }).catch(error => console.log(error))
}

// PUT /api/users/:id
export const updateUser = async (req: Request, res: Response) => {
  await User.findOne({ _id: req.params.id }, async (error: Error, userToUpdate: IUser) => {
    if (error) {
      return res.status(400).json({ success: false, error })
    }
    if (!userToUpdate) {
      return res.status(404).json({ success: false, error: "User with this Id not found." })
    }

    const { name, token } = req.body;

    if (name) {
      userToUpdate.name = name
    }
    if (token) {
      // Check if token is unique
      // TODO: create this in factory to use validators 
      // const isUnique = await checkIfUnique(User, "token", token)
      // if (!isUnique) {
      //   return res.status(400).json({ success: false, error: "Token is not unique." })
      // }

      userToUpdate.token = token
    }

    userToUpdate.save().then(() => {
      return res.status(200).json({ success: true, data: userToUpdate })
    }).catch(error => console.log(error))
  })
}

// DELETE /api/users/:id
export const deleteUser = async (req: Request, res: Response) => {
  await User.findByIdAndDelete(req.params.id, req.body, (error, user) => {
    if (error) {
      return res.status(400).json({ success: false, error })
    }

    return res.status(204).json({ success: true, message: "user deleted succesfully" })
  })
}