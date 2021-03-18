import { createFormField, getFormFields, getFormFieldById, deleteFormField } from '../../controllers/formField-ctrl'
import { createRouterForActions, IMatched } from '../../helpers/routeCreator'

const actions: IMatched = {
  createFormField: {
    method: 'post',
    url: "/",
    action: createFormField
  },
  getFormFields: {
    method: "get",
    url: "/",
    action: getFormFields
  },
  getFormFieldById: {
    method: "get",
    url: "/:id",
    action: getFormFieldById
  },
  updateFormField: {
    method: "put",
    url: "/:id",
    action: createFormField
  },
  deleteFormField: {
    method: "delete",
    url: "/:id",
    action: deleteFormField
  },
}

export default createRouterForActions(actions)