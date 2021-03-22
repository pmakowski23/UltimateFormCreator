import { anyOfTypes, IModelKeys, IModelTypes } from "./models"
import { checkIfMaxIsLoverThanMin, checkIfUnique, checkLengthSelect, ICheckIfUnique } from "./validators"

export type IAdditionalLogicElement<T extends anyOfTypes<ILogic>, K extends anyOfTypes<IAdditionalValues>> =
  {
    validator: T
    additionalVariables: K
  }

export type IAdditionalLogic = IAdditionalLogicElement<anyOfTypes<ILogic>, anyOfTypes<IAdditionalValues>>[]


export interface ILogic {
  checkIfUnique: typeof checkIfUnique
  checkLengthSelect: typeof checkLengthSelect
  checkIfMaxIsLoverThanMin: typeof checkIfMaxIsLoverThanMin
}

export interface IAdditionalValues {
  checkIfUnique: ICheckIfUnique<anyOfTypes<IModelTypes>, anyOfTypes<IModelKeys>>
  checkLengthSelect: null
  checkIfMaxIsLoverThanMin: null
}
