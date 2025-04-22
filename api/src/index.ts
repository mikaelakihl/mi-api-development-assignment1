import 'dotenv/config';
import  express from 'express'
import { connectToDB } from './config/db';


const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Testing');
});

import productRoute from './routes/productRoute'
app.use('/', productRoute)

import categoryRoute from './routes/categoryRoute'
app.use('/', categoryRoute)

connectToDB();

const PORT = 2503
app.listen(PORT, () => {
    console.log(`Server is connected at http://localhost:${PORT}`)
})

