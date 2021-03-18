import { createWebsite, deleteWebsite, getWebsiteById, getWebsites, updateWebsite } from '../../controllers/website-ctrl'
import { createRouterForActions, IMatched } from '../../helpers/routeCreator'

const actions: IMatched = {
  createWebsite: {
    method: "post",
    url: '/',
    action: createWebsite
  },
  getWebsites: {
    method: "get",
    url: '/',
    action: getWebsites
  },
  getWebsiteById: {
    method: "get",
    url: '/:id',
    action: getWebsiteById
  },
  updateWebsite: {
    method: "put",
    url: '/:id',
    action: updateWebsite
  },
  deleteWebsite: {
    method: "post",
    url: '/:id',
    action: deleteWebsite
  },
}

export default createRouterForActions(actions)