const db = require('./connection')


getAllResolutions = () => {
    return db('resolution')
}

postResolutions = (body) => {
    return db('resolution').insert({
        name: body.name,
        resolution: body.resolution
    })
}

deleteResolutions = id => {
    return db('resolution').where('id', id).del()
}

updateResolution = (body, id) => {
    return db('resolution').update({
        name: body.name,
        resolution: body.resolution
    }).where('id', id)
}

module.exports = {
    getAllResolutions,
    postResolutions,
    deleteResolutions,
    updateResolution
}