
const restful = require('node-restful')
const mongoose = restful.mongoose

const apiSchema = new mongoose.Schema({
    description: { type: String, require: true },
    done: { type: Boolean, require: true, default: false },
    created: { type: Date, default: Date.now }
})

module.exports = restful.model('ApiNode', apiSchema)