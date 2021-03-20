import { Request, Response } from 'express'
import { IModelTypes, IModel, IModelKeys, anyOfTypes } from './models'
import { IValidators, IAdditionalValues } from './validators';
import mongoose, { CallbackError, QueryOptions } from 'mongoose'
import capitalize from './capitalize'

export type IAdditionalLogic = [
  {
    validator: IValidators[keyof IValidators],
    additionalVariables: IAdditionalValues[keyof IAdditionalValues]
  }
]

export const factoryCreateEndpoint =
  (model: anyOfTypes<IModelTypes>, additionalLogic?: IAdditionalLogic) =>
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
  (model: anyOfTypes<IModelTypes>) => {
    const modelName = capitalize(model.collection.name)
    return async (_: Request, res: Response) => {
      try {
        await mongoose.model(modelName).find({}, (error, objects) => {
          if (error) {
            return res.status(400).json({ success: false, error })
          }
          if (!objects.length) {
            return res.status(404).json({ success: false, error: "No objects found." })
          }

          return res.status(200).json({ success: false, data: objects })
        })
      } catch (error) {
        console.log(error)
        return res.status(400).json({ success: false, error })
      }
    }
  }

export const factoryGetOneByIdEndpoint =
  (model: anyOfTypes<IModelTypes>) =>
    async (req: Request, res: Response) => {
      await model.findOne({ _id: req.params.id }, (error: Error, object: IModel[keyof IModel]) => {
        if (error) {
          return res.status(400).json({ success: false, error })
        }
        if (!object) {
          return res.status(404).json({ success: false, error: "User with this Id not found." })
        }

        return res.status(200).json({ success: true, data: object })
      }).catch(error => console.log(error))
    }

export const factoryUpdateEndpoint =
  (model: anyOfTypes<IModelTypes>, additionalLogic?: IAdditionalLogic) =>
    async (req: Request, res: Response) => {
      await model.findOne({ _id: req.params.id }, async (error: Error, objectToUpdate: any) => {
        if (error) {
          return res.status(400).json({ success: false, error })
        }
        if (!objectToUpdate) {
          return res.status(404).json({ success: false, error: "User with this Id not found." })
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

        const body = <IModel[keyof IModel]>req.body
        for (let [key, value] of Object.entries(body)) {
          objectToUpdate[key] = value
        }

        try {
          objectToUpdate.save()
          return res.status(200).json({ success: true, data: objectToUpdate })
        } catch (error) {
          return res.status(400).json({ success: false, error })
        }
      })
    }

// TODO: create rest methods.
// TODO: Implement them in rest of the models.