import dotenv from 'dotenv'

const Sequelize = require('sequelize')

dotenv.config()

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: process.env.DB_CONNECTION_NAME
        ? `/cloudsql/${process.env.DB_CONNECTION_NAME}`
        : process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: process.env.DB_DRIVER || 'postgres',
      protocol: process.env.DB_DRIVER,
      dialectOptions: process.env.DB_CONNECTION_NAME
        ? {
          // ssl: true
          socketPath: `/cloudsql/${process.env.DB_CONNECTION_NAME}`,
        }
        : { ssl: false },
      logging: false,
      define: {
        underscored: true,
      },
    },
  )

module.exports = sequelize
