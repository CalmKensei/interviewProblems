import express from 'express';

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/randomNumber', (req, res) => {
    let randomNumb = Math.floor(Math.random() * 100)
    res.send(randomNumb.toString());
})

let called = 0;
app.get('/canError', (req, res) => {
    called++;
    if (called % 2 == 0) {
        res.status(500)
        res.send('server error ')
    } else {
        res.send('success');
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})