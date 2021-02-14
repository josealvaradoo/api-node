import BaseBusiness from './base.business'
import { User } from '../models'

class UserBusiness extends BaseBusiness {
  constructor({ UserRepository }) {
    super(UserRepository, User)
  }
}

module.exports = UserBusiness
