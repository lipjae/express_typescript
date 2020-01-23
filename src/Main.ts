import express, { Request, Response } from 'express';
import indexController from './controller/index'

class Main {
  public app: express.Application;
  constructor(){
    this.app = express();
    this.app.use(express.json())
    this.app.use(express.urlencoded({extended: false}))
    this.app.use('/', indexController)
    // this.app.get('/', (req: Request, res: Response) => {
    //   res.send('Hello World!')
    // })
  }
}
const main = new Main()

export default main.app


