import { Request, Response } from 'express'
import User from '../models/user-model'

// POST /api/users
export const createUser = async (req: Request, res: Response) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide user."
    })
  }

  try {
    var user = new User(body);
  } catch (error) {
    return res.status(400).json({ success: false, error })
  }

  user.save().then(() => {
    return res.status(201).json({
      success: true,
      id: user._id,
      message: "Kocham Cię ❤️."
    })
  }).catch((error) => {
    return res.status(400).json({
      error,
      message: "User not created due to error."
    })
  })
}

// GET /api/users

export const getUsers = async (req: Request, res: Response) => {
  User.find({}, (error, users) => {
    if (error) {
      return res.status(400).json({ success: false, error })
    }
    if (!users.length) {
      return res.status(404).json({ success: false, error: "No users found" })
    }
    return res.status(200).json({ success: false, data: users })
  }).catch(error => console.log(error))
}

// GET /api/users/:id
export const getUserById = async (req: Request, res: Response) => {
  User.find({ _id: req.params.id }, (error, user) => {
    if (error) {
      return res.status(400).json({ success: false, error })
    }
    if (!user) {
      return res.status(404).json({ success: false, error: "User with this Id not found." })
    }
    return res.status(200).json({ success: true, data: user })
  }).catch(error => console.log(error))
}
