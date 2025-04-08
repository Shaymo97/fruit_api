const express = require('express')
const app = express()
const fruits = require('./routes/fruits')

app.get('/',(req,res) => {
    res.send('Hello Fruity')
})

app.use(express.json())
app.use('/fruits', fruits) //for all URL endpoints with "fruits" we will use the fruits input from routes


module.exports = app