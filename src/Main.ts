import express, { Request, Response } from 'express';
import path from 'path'
import serveStatic from 'serve-static'
import indexController from './controller/index'

class Main {
  public app: express.Application;
  constructor(){
    this.app = express();
    this.app.set('views', path.join(__dirname, '../dist'));
    this.app.set('view engine', 'ejs')
    this.app.engine('html', require('ejs').renderFile)
    this.app.use(express.json())
    this.app.use(express.urlencoded({extended: false}))
    this.app.use('/', indexController)
  }
}
const main = new Main()

export default main.app


