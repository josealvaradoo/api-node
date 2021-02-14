import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

class App {
  constructor({ router }) {
    this.app = express()
    this.app.use(router)
  }

  settings() {
    this.app.set('port', process.env.APP_PORT || 3001)
  }

  async start() {
    this.settings()

    await this.app.listen(this.app.get('port'))

    // eslint-disable-next-line
    console.log(`Listen on port :${this.app.get('port')}`)
  }
}

module.exports = App
