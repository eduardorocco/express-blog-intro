const express = require('express')
const app = express()
const port = 3000
const post = require('./post.js')

app.get('/', (req, res) => {
    res.send('Benvenuto nel Server')
})

app.use(express.static('public'))

app.get('/bacheca', (req, res) => {
    res.json({ result:post , count:post.length})
})

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
})