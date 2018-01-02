const express = require('express')
const router = express.Router()
const db = require('../db/query')

router.get('/', (req,res) => {
    db.getAllResolutions()
    .then(data => res.json(data))
})

router.post('/', (req, res) => {
    let body = req.body
    db.postResolutions(body)
    .then(() => res.redirect('http://localhost:3000'))
})

router.delete('/delete/:id', (req,res) => {
let id = req.params.id
db.deleteResolutions(id)
.then(() => res.redirect('https://localhost:3000'))
})

router.put('/update/:id', (req, res) => {
    let id = req.params.id
    let body = req.body
    db.updateResolution(body, id)
    .then(()=> res.redirect('/'))
})

module.exports = router