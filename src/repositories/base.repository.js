class BaseRepository {
  constructor(db, entity) {
    this.db = db
    this.entity = entity
  }

  getAll() {
    return this.db[this.entity].findAll()
  }

  get(id) {
    return this.db[this.entity].findByPk(id)
  }

  create(entity) {
    return this.db[this.entity].create(entity)
  }

  update(id, entity) {
    const data = entity
    delete data.created_at
    delete data.updated_at
    return this.db[this.entity].update(data, {
      where: {
        id,
      },
    })
  }

  destroy(id) {
    return this.db[this.entity].destroy({
      where: {
        id,
      },
    })
  }
}

module.exports = BaseRepository
