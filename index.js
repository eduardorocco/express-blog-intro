const express = require('express')
const app = express()
const port = 3000
const post = require('./post.js')

app.get('/', (req, res) => {
    res.send(post)
})

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
})