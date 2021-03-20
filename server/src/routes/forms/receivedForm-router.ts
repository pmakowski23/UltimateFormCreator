import { createReceivedForm, deleteReceivedForm, getReceivedFormById, getReceivedForms, updateReceivedForm } from '../../controllers/receivedForm-ctrl'
import { createRouterForActions, IMatched } from '../../helpers/routeCreator'

const actions: IMatched = {
  createReceivedForm: {
    method: "post",
    url: '/',
    action: createReceivedForm
  },
  getReceivedForms: {
    method: "get",
    url: '/',
    action: getReceivedForms
  },
  getReceivedFormById: {
    method: "get",
    url: '/:id',
    action: getReceivedFormById
  },
  updateReceivedForm: {
    method: "put",
    url: '/:id',
    action: updateReceivedForm
  },
  deleteReceivedForm: {
    method: "delete",
    url: '/:id',
    action: deleteReceivedForm
  },
}

export default createRouterForActions(actions)