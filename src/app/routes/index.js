import express, { Router } from 'express'
import cors from 'cors'

module.exports = ({ UserRoutes }) => {
  const router = Router()
  const apiRouter = Router()

  apiRouter
    .use(cors())
    .use(express.json())

  apiRouter.use('/users', UserRoutes)

  router.use('/api/v1', apiRouter)

  return router
}
