const express = require('express')
const Route = express.Router()

const { userCallback, userPromise, userAsyncAwait, userGetToken } = require('../controllers/user')
const { tokenVerify } = require('../helpers/auth')

Route
  .all('/*')
  .get('/callback', userCallback)
  .get('/promise', tokenVerify, userPromise)
  .get('/async', tokenVerify, userAsyncAwait)
  .get('/token', userGetToken)

module.exports = Route
