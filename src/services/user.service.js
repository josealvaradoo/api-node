import BaseService from './base.service'

class UserService extends BaseService {
  constructor({ UserBusiness }) {
    super(UserBusiness)
  }
}

module.exports = UserService
