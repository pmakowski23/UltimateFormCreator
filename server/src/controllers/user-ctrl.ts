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
