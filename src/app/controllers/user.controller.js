import mapper from 'automapper-js'
import Response from '../../utils/response.utils'

const { User } = require('../../models')

class UserController {
  constructor({ UserService }) {
    this.userService = UserService
  }

  async index(req, res) {
    let users = await this.userService.getAll()
    const response = new Response(res)

    users = users.map((user) => mapper(User, user))

    return response.json(users, 200, null)
  }

  async get(req, res) {
    const { id } = req.params
    let user = await this.userService.get(id)
    const response = new Response(res)

    if (!user) {
      return res.status(404).send()
    }

    user = mapper(User, user)

    return response.json(user, 200, null)
  }

  async create(req, res) {
    const { body } = req
    const response = new Response(res)
    const createdUser = await this.userService.create(body)
    const user = mapper(User, createdUser)

    return response.json(user, 201, null)
  }

  async update(req, res) {
    const { body } = req
    const { id } = req.params
    const response = new Response(res)

    await this.userService.update(id, body)

    return response.noContent()
  }

  async delete(req, res) {
    const { id } = req.params
    const response = new Response(res)

    await this.userService.delete(id)

    return response.noContent()
  }
}

module.exports = UserController
