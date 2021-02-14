import {
  asClass, createContainer, asFunction, asValue,
} from 'awilix'

// routes
import Routes from './routes'

const UserRoutes = require('./routes/users.routes')

// business
const { UserBusiness } = require('../domain')

// controllers
const { UserController } = require('./controllers')

// services
const { UserService } = require('../services')

// repositories
const { UserRepository } = require('../repositories')

// db
const db = require('../database/models')

// app
const app = require('./server')

const container = createContainer()

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    UserController: asClass(UserController).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
  })
  .register({
    config: asValue(process.env),
  })
  .register({
    db: asValue(db),
  })
  .register({
    UserService: asClass(UserService).singleton(),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
  })
  .register({
    UserBusiness: asClass(UserBusiness).singleton(),
  })

module.exports = container
