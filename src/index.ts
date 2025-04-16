import  express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send('Testing');
});

const PORT = 2503
app.listen(PORT, () => {
    console.log(`Server is connected at http://localhost:${PORT}`)
})

