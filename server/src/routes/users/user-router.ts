import { createUser, deleteUser, getUserById, getUsers, updateUser } from '../../controllers/user-ctrl'
import { createRouterForActions, IMatched } from '../../helpers/routeCreator'

const actions: IMatched = {
  createUser: {
    method: "post",
    url: '/',
    action: createUser
  },
  getUsers: {
    method: "get",
    url: '/',
    action: getUsers
  },
  getUserById: {
    method: "get",
    url: '/:id',
    action: getUserById
  },
  updateUser: {
    method: "put",
    url: '/:id',
    action: updateUser
  },
  deleteUser: {
    method: "delete",
    url: '/:id',
    action: deleteUser
  },
}

export default createRouterForActions(actions)