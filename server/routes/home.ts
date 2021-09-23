import express, {Request, Response} from 'express'
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.sendFile(`http://${req.headers.host}/index.html`);
});

export default router