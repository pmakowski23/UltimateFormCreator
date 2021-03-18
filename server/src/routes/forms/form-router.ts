import { createForm, deleteForm, getFormById, getForms, updateForm } from '../../controllers/form-ctrl'
import { createRouterForActions, IMatched } from '../../helpers/routeCreator'

const actions: IMatched = {
  createForm: {
    method: "post",
    url: '/',
    action: createForm
  },
  getForms: {
    method: "get",
    url: '/',
    action: getForms
  },
  getFormById: {
    method: "get",
    url: '/:id',
    action: getFormById
  },
  updateForm: {
    method: "put",
    url: '/:id',
    action: updateForm
  },
  deleteForm: {
    method: "post",
    url: '/:id',
    action: deleteForm
  },
}

export default createRouterForActions(actions)