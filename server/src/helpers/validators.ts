import { IModelTypes, IModelKeys, IModel, anyOfTypes } from './models'

interface ICheckIfUnique {
  model: anyOfTypes<IModelTypes>
  key: anyOfTypes<IModelKeys>
}

export interface IAdditionalValues {
  checkIfUnique: ICheckIfUnique
}

export interface IValidators {
  checkIfUnique: typeof checkIfUnique
}

export const checkIfUnique = async (attributes: ICheckIfUnique, body: any) => {
  const { model, key } = attributes
  const value = body[key]
  const isUnique = ! await model.findOne({ [key]: value })
  if (!isUnique) {
    throw `${key} is not unique!`
  }
}