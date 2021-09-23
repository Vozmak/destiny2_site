import express from "express"
import cors from 'cors'

import home from './routes/home.js';
import getInfoUser from './routes/getInfoUsersRouter.js'

const app = express();

const PORT = 2000;
const hostname = '127.0.0.1';

app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200,
}))
app.use(express.static('D:\\repos\\express\\destiny2\\client'));

app.use('/', home);
app.use('/', getInfoUser);

app.listen(PORT, hostname, () => {
    console.log(`Server start: http://${hostname}:${PORT}`);
})