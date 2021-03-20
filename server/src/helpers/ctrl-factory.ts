import { Request, Response } from 'express'
import { IModelTypes } from './models'
import { IValidators, IAdditionalValues } from './validators';
import mongoose from 'mongoose'
import capitalize from './capitalize'

// TODO: Add validation option

export type IAdditionalLogic = [
  {
    validator: IValidators[keyof IValidators],
    additionalVariables: IAdditionalValues[keyof IAdditionalValues]
  }
]

export const factoryCreateEndpoint =
  (model: IModelTypes[keyof IModelTypes], additionalLogic?: IAdditionalLogic) =>
    async (req: Request, res: Response) => {
      const body = req.body;

      if (!body) {
        return res.status(400).json({
          success: false,
          error: `You must provide ${model.constructor.name}.`
        })
      }

      if (additionalLogic) {
        try {
          for (const element in additionalLogic) {
            const { validator, additionalVariables } = additionalLogic[element]
            await validator(additionalVariables, req.body)
          }
        } catch (error) {
          console.log(error)
          return res.status(400).json({ success: false, error })
        } finally {
          console.log("All validation succeeded")
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

export const factoryGetAllEndpoint =
  (model: IModelTypes[keyof IModelTypes]) => {
    const modelName = capitalize(model.collection.name)
    return async (_: Request, res: Response) => {
      try {
        await mongoose.model(modelName).find({}, (error, users) => {
          if (error) {
            return res.status(400).json({ success: false, error })
          }
          if (!users.length) {
            return res.status(404).json({ success: false, error: "No users found." })
          }

          return res.status(200).json({ success: false, data: users })
        })
      } catch (error) {
        console.log(error)
        return res.status(400).json({ success: false, error })
      }
    }
  }

// TODO: create rest methods.
// TODO: Implement them in rest of the models.