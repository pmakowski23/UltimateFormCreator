import { anyOfTypes, IModelTypes, IModelKeys } from './models'

interface ICheckIfUnique<T, K> {
  model: T
  key: K
}

export interface IAdditionalValues {
  checkIfUnique: ICheckIfUnique<anyOfTypes<IModelTypes>, anyOfTypes<IModelKeys>>
}

export interface IValidators {
  checkIfUnique: typeof checkIfUnique
}

export const checkIfUnique = async <T, K extends keyof T>(attributes: ICheckIfUnique<anyOfTypes<IModelTypes>, K>, body: T) => {
  const { model, key } = attributes
  const value = body[key]
  const isUnique = ! await model.findOne({ [key]: value })
  if (!isUnique) {
    throw `${key} is not unique!`
  }
}