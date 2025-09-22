'use strict'

const express = require('express')
const routes = express.Router()

// Debug route
routes.get('/test', (req, res) => {
  res.json({ message: 'Routes working!' })
})

routes.use('/', require('./access/index'))

module.exports = routes