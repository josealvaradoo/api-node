import container from './app/container'

const app = container.resolve('app')
const db = container.resolve('db')

app
  .start()
  .then(async () => {
    await db.sequelize.sync()
  })
