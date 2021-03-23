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

export interface ICheckLength<T> {
  firstValue: T
  secondValue: T
}

// TODO: change to be more generic (get 2 arrays that should be the same length)
export const checkLengthSelect = (_: any, body: SelectData): void => {
  const areTheSameLength = body.values.length === body.defaultCheck.length
  if (!areTheSameLength) {
    throw `Values and DefaultCheck must be the same length!`
  }
}

export const checkIfMaxIsLoverThanMin = (_: any, body: FormFieldData): void => {
  if (body.maxValue !== undefined && body.minValue !== undefined) {
    const isMaxHigher = body.maxValue > body.minValue
    if (!isMaxHigher) {
      throw 'MaxValue must be higher than MinValue'
    }
  }
}

export const checkIfRegexIsValid = (_: any, body: FormFieldData): void => {
  if (body.pattern) {
    try {
      new RegExp(body.pattern)
    } catch {
      throw `Your pattern is not valid regex`
    }
  }
}