import BaseRepository from './base.repository'

class UserRepository extends BaseRepository {
  constructor({ db }) {
    super(db, 'User')
  }
}

module.exports = UserRepository
