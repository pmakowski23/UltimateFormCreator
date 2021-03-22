import { FormFieldData } from '../models/forms/formField-model'
import { SelectData } from '../models/forms/select-model'
import { anyOfTypes, IModelTypes } from './models'

export interface ICheckIfUnique<T, K> {
  model: T
  key: K
}

export const checkIfUnique = async <T, K extends keyof T>(attributes: ICheckIfUnique<anyOfTypes<IModelTypes>, K>, body: T): Promise<void> => {
  const { model, key } = attributes
  const value = body[key]
  const isUnique = ! await model.findOne({ [key]: value })
  if (!isUnique) {
    throw `${key} is not unique!`
  }
}

export const checkLengthSelect = (_: any, body: SelectData): void => {
  const areTheSameLength = body.values.length === body.defaultCheck.length
  if (!areTheSameLength) {
    throw `Values and DefaultCheck must be the same length!`
  }
}

export const checkIfMaxIsLoverThanMin = (_: any, body: FormFieldData): void => {
  if (body.maxValue && body.minValue) {
    const isMaxHigher = body.maxValue > body.minValue
    if (!isMaxHigher) {
      throw 'MaxValue must be higher than MinValue'
    }
  }
}