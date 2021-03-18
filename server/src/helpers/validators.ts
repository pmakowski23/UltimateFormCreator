import { IModel } from './models'

export const checkIfUnique = async (model: IModel[keyof IModel], key: string, value: string) => {
  const isUnique = !await model.findOne({ [key]: value })
  if (!isUnique) {
    throw new Error(`${key} "${value}" is not unique!`)
  }
}