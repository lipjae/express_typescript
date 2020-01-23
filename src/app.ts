import express, { Request, Response } from 'express';

class App {
  public app: express.Application;

  constructor(){
    this.app = express();
    this.app.use(express.json())
    this.app.use(express.urlencoded({extended: false}))
    this.app.get('/', (req: Request, res: Response) => {
      res.send('Hello World!')
    })
  }
}

const app = new App().app
app.listen(3000, () => console.log('Server Start !'))
