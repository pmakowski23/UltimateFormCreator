import { Request, Response } from 'express'
import { IModel } from './models'

// TODO: Add validation option

export const factoryCreateEndpoint = (model: IModel[keyof IModel], additionalLogic?: Function) => async (req: Request, res: Response) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: `You must provide ${model.constructor.name}.`
    })
  }

  if (additionalLogic) {
    try {
      additionalLogic();
    } catch (error) {
      return res.status(400).json({ success: false, error })
    }
  }

  try {
    const object = new model(body);
    await object.save()
    return res.status(201).json({
      success: true,
      id: object._id,
      message: "Form created."
    })
  } catch (error) {
    return res.status(400).json({ success: false, error })
  }
}

// TODO: create rest methods.
// TODO: Implement them in rest of the models.