import { Router } from 'express'

const UserRoutes = ({ UserController }) => {
  const router = Router()

  router.get('/', UserController.index.bind(UserController))
  router.post('/', UserController.create.bind(UserController))

  return router
}

module.exports = UserRoutes
