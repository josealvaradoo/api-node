class BaseService {
  constructor(EntityBusiness) {
    this.entityBusiness = EntityBusiness
  }

  async getAll() {
    const entities = await this.entityBusiness.getAll()
    return entities
  }

  async get(id) {
    const entity = await this.entityBusiness.get(id)
    return entity
  }

  async create(entity) {
    const createdEntity = await this.entityBusiness.create(entity)
    return createdEntity
  }

  async update(id, entity) {
    const updatedEntity = await this.entityBusiness.update(id, entity)
    return updatedEntity
  }

  async delete(id) {
    const deletedEntity = await this.entityBusiness.delete(id)
    return deletedEntity
  }
}

module.exports = BaseService
