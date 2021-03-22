import express, { RequestHandler, Router } from 'express'

export interface IMatched {
  [dynamic: string]: {
    method: "get" | "post" | "put" | "delete";
    url: string;
    action: RequestHandler;
  }
}

export const createRouterForActions = (actions: IMatched): Router => {
  const values = Object.values(actions)
  const router = express.Router()
  for (const { method, url, action } of values) {
    router[method](url, action)
  }
  return router
}