import Select from '../models/forms/select-model'
import {
  factoryCreateEndpoint,
  factoryDeleteEndpoint,
  factoryGetAllEndpoint,
  factoryGetOneByIdEndpoint,
  factoryUpdateEndpoint,
} from '../helpers/ctrl-factory'
import { checkLengthSelect } from '../helpers/validators';
import { IAdditionalLogicElement, IAdditionalLogic, IAdditionalValues } from '../helpers/additionalLogic';

// POST /api/selects
const checkIfLengthIsEqual: IAdditionalLogicElement<typeof checkLengthSelect, IAdditionalValues["checkLengthSelect"]> = {
  validator: checkLengthSelect,
  additionalVariables: null
}
const createValidation: IAdditionalLogic = [
  checkIfLengthIsEqual
]
export const createSelect = factoryCreateEndpoint(Select, createValidation);

// GET /api/selects
export const getSelects = factoryGetAllEndpoint(Select)

// GET /api/selects/:id
export const getSelectById = factoryGetOneByIdEndpoint(Select)

// PUT /api/selects/:id
export const updateSelect = factoryUpdateEndpoint(Select)

// DELETE /api/selects/:id
export const deleteSelect = factoryDeleteEndpoint(Select)