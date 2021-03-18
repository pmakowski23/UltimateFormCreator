import { createSelect, deleteSelect, getSelectById, getSelects, updateSelect } from '../../controllers/select-ctrl'
import { createRouterForActions, IMatched } from '../../helpers/routeCreator'

const actions: IMatched = {
  createSelect: {
    method: "post",
    url: '/',
    action: createSelect
  },
  getSelects: {
    method: "get",
    url: '/',
    action: getSelects
  },
  getSelectById: {
    method: "get",
    url: '/:id',
    action: getSelectById
  },
  updateSelect: {
    method: "put",
    url: '/:id',
    action: updateSelect
  },
  deleteSelect: {
    method: "post",
    url: '/:id',
    action: deleteSelect
  },
}

export default createRouterForActions(actions)