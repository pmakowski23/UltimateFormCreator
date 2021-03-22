import { Request, Response } from 'express'
import { IModelTypes, IModel, anyOfTypes } from './models'
import mongoose, { CallbackError, QueryOptions } from 'mongoose'
import capitalize from './capitalize'
import { IAdditionalLogic } from './additionalLogic';


export const factoryCreateEndpoint =
  (model: anyOfTypes<IModelTypes>, additionalLogic?: IAdditionalLogic) =>
    async (req: Request, res: Response): Promise<Response | undefined> => {
      const body = req.body;

      if (!body) {
        return res.status(400).json({
          success: false,
          error: `You must provide ${capitalize(model.collection.name.slice(0, -1))}.`
        })
      }

      if (additionalLogic) {
        try {
          for (const element in additionalLogic) {
            const { validator, additionalVariables } = additionalLogic[element]
            await validator(additionalVariables, req.body)
          }
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
          message: `${capitalize(model.collection.name.slice(0, -1))} created.`
        })
      } catch (error) {
        return res.status(400).json({ success: false, error })
      }
    }

export const factoryGetAllEndpoint =
  (model: anyOfTypes<IModelTypes>) =>
    async (_: Request, res: Response): Promise<Response | undefined> => {
      const modelName = capitalize(model.collection.name)
      try {
        await mongoose.model(modelName).find({}, (error, objects) => {
          if (error) {
            return res.status(400).json({ success: false, error })
          }
          if (!objects.length) {
            return res.status(404).json({ success: false, error: `No ${model.collection.name} found.` })
          }

          return res.status(200).json({ success: false, data: objects })
        })
      } catch (error) {
        return res.status(400).json({ success: false, error })
      }
    }

export const factoryGetOneByIdEndpoint =
  (model: anyOfTypes<IModelTypes>) =>
    async (req: Request, res: Response): Promise<Response | undefined> => {
      try {
        await model.findOne({ _id: req.params.id }, (error: Error, object: anyOfTypes<IModel>) => {
          if (error) {
            return res.status(400).json({ success: false, error })
          }
          if (!object) {
            return res.status(404).json({ success: false, error: `${capitalize(model.collection.name)} with this Id not found.` })
          }

          return res.status(200).json({ success: true, data: object })
        })
      } catch (error) {
        return res.status(400).json({ success: false, error })
      }
    }

export const factoryUpdateEndpoint =
  (model: anyOfTypes<IModelTypes>, additionalLogic?: IAdditionalLogic) =>
    async (req: Request, res: Response): Promise<Response | undefined> => {
      try {
        await model.findOne({ _id: req.params.id }, async (error: Error, objectToUpdate: anyOfTypes<IModel>) => {
          if (error) {
            return res.status(400).json({ success: false, error })
          }
          if (!objectToUpdate) {
            return res.status(404).json({ success: false, error: `${capitalize(model.collection.name.slice(0, -1))} with this Id not found.` })
          }

          if (additionalLogic) {
            try {
              for (const element in additionalLogic) {
                const { validator, additionalVariables } = additionalLogic[element]
                await validator(additionalVariables, req.body)
              }
            } catch (error) {
              return res.status(400).json({ success: false, error })
            }
          }

          const body = req.body
          for (const [key, value] of Object.entries(body)) {
            await objectToUpdate.update({ [key]: value })
          }

          try {
            objectToUpdate.save()
            return res.status(200).json({ success: true, data: objectToUpdate })
          } catch (error) {
            return res.status(400).json({ success: false, error })
          }
        })
      } catch (error) {
        return res.status(400).json({ success: false, error })
      }
    }

export const factoryDeleteEndpoint =
  (model: anyOfTypes<IModelTypes>, options?: QueryOptions) =>
    async (req: Request, res: Response): Promise<Response | undefined> => {
      try {
        await model.deleteOne({ _id: req.params.id }, options, (error: CallbackError) => {
          if (error) return res.status(400).json({ success: false, error })
          return res.status(204).json({ success: false, error })
        })
      } catch (error) {
        return res.status(400).json({ success: false, error })
      }
    }
