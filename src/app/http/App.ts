import express, { Application } from 'express'
import cors from 'cors'
import { bodyParser } from '@app/middlewares/bodyParser'

class App {
    public app: Application

    constructor () {
      this.app = express()
      this.middlewares()
    }

    private middlewares (): void {
      this.app.use(cors)
      this.app.use(bodyParser)
    }
}

export default new App().app
