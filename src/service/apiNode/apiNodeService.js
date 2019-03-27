const ApiNode = require('./apiNode')

ApiNode.methods(['get','post','put','delete'])
ApiNode.updateOptions({ new: true, runValidators: true })

module.exports = ApiNode