import express, { Request, Response } from 'express'
const router = express();

/**
 * GET
 */
router.get('/', (req: Request, res: Response) => {
  res.render('index')
})

router.get('/hi', (req: Request, res: Response) => {
  res.send('Hi')
})

export default router