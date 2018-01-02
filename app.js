const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const index = require('./routes/year_resolution')


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/', index)

app.listen(port, () => {
    console.log('Listening on port:' + port)
})