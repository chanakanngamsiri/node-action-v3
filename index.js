const express = require('express')
const app = express()
const port = process.env.PORT || 3000

let items = [{id:1,name:'iphone 12 pro max'},{id:2,name:'Googel Pixel 5'}]

app.get('/', (req, res) => {
    return res.send('Hello!')
})

app.get('/items', (req, res) => {
    return res.json(items)
})

app.listen(port, () => {
    console.log(`Start Express application at ${port}`)
})

module.exports = app