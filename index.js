const express = require('express')
const app = express()
const port = 3000

app.use('/assets', express.static('assets'))

app.get('/food', (req, res) => {
    res.sendFile('/views/food.html', { root: __dirname })
})

app.get('/medicine', (req, res) => {
    res.sendFile('/views/medicine.html', { root: __dirname })
})

app.get('/location', (req, res) => {
    res.sendFile('/views/location.html', { root: __dirname })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})