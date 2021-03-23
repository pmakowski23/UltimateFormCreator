import { anyOfTypes, IModelKeys, IModelTypes } from "./models"
import { checkIfMaxIsLoverThanMin, checkIfRegexIsValid, checkIfUnique, checkLengthSelect, ICheckIfUnique } from "./validators"

export type IAdditionalLogicElement<T extends anyOfTypes<ILogic>> =
  {
    validator: T
    additionalVariables: (
      T extends ILogic["checkIfUnique"] ? IAdditionalValues["checkIfUnique"] :
      T extends ILogic["checkLengthSelect"] ? IAdditionalValues["checkLengthSelect"] :
      T extends ILogic["checkIfMaxIsLoverThanMin"] ? IAdditionalValues["checkIfMaxIsLoverThanMin"] :
      T extends ILogic["checkIfRegexIsValid"] ? IAdditionalValues["checkIfRegexIsValid"] :
      undefined
    )
  }

export type IAdditionalLogic = IAdditionalLogicElement<anyOfTypes<ILogic>>[]


export interface ILogic {
  checkIfUnique: typeof checkIfUnique
  checkLengthSelect: typeof checkLengthSelect
  checkIfMaxIsLoverThanMin: typeof checkIfMaxIsLoverThanMin
  checkIfRegexIsValid: typeof checkIfRegexIsValid
}

export interface IAdditionalValues {
  checkIfUnique: ICheckIfUnique<anyOfTypes<IModelTypes>, anyOfTypes<IModelKeys>>
  checkLengthSelect: undefined
  checkIfMaxIsLoverThanMin: undefined
  checkIfRegexIsValid: undefined
}
