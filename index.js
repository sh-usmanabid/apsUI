const express = require('express')
const path = require('path')
const app = express()

app.use('/assets', express.static('assets'))

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
})

app.get('/food', (req, res) => {
    res.sendFile(path.join(__dirname, './views/food.html'))
})

app.get('/medicine', (req, res) => {
    res.sendFile(path.join(__dirname, './views/medicine.html'))
})

app.get('/location', (req, res) => {
    res.sendFile(path.join(__dirname, './views/location.html'))
})

app.get('/settings', (req, res) => {
    res.sendFile(path.join(__dirname, './views/settings.html'))
})

app.listen(port, () => {
    console.log('Server started at http://localhost:' + port)
})