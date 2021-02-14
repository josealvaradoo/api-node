import mapper from 'automapper-js'

class BaseBusiness {
  constructor(EntityRepository, entityToMap) {
    this.entityRepository = EntityRepository
    this.entityToMap = entityToMap
  }

  async getAll() {
    const entities = await this.entityRepository.getAll()
    return entities.map((entity) => mapper(this.entityToMap, entity.toJSON()))
  }

  async get(id) {
    const entity = await this.entityRepository.get(id)
    if (!entity) return null
    return mapper(this.entityToMap, entity.toJSON())
  }

  async create(entity) {
    const newEntity = mapper(this.entityToMap, entity)
    const createdEntity = await this.entityRepository.create(newEntity)
    return mapper(this.entityToMap, createdEntity.toJSON())
  }

  async update(id, entity) {
    let newEntity
    newEntity.id = id
    newEntity = mapper(this.entityToMap, entity)
    const updatedEntity = await this.entityRepository.update(id, newEntity)
    return mapper(this.entityToMap, updatedEntity)
  }

  async delete(id) {
    const result = await this.entityRepository.delete(id)
    return result
  }
}

module.exports = BaseBusiness
