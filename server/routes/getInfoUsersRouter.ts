import express, {Request, Response} from 'express'

const router = express.Router();

router.get('/users/:id', (req: Request, res: Response) => {
    console.log(req.params.id)
    res.status(200)
    res.end()
});

export default router