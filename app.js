const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const index = require('./routes/year_resolution')
const cors = require('cors')
const method = require('method-override')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(method('_method'))
app.use(cors())
app.use('/', index)


app.listen(port, () => {
    console.log('Listening on port:' + port)
})