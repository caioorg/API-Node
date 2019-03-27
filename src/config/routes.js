const express = require('express')

module.exports = (server) => {
    // API Routes
    const router = express.Router()
    server.use('/api', router)

    //Map Routers
    const ApiNodeService = require('../service/apiNode/apiNodeService')
    ApiNodeService.register(router, '/api/v1')
}