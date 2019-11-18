const express = require('express')
const Route = express.Router()

const user = require('./user')

Route
  .use('/user', user)

module.exports = Route
