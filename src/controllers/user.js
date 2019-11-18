require('dotenv/config')
const userModel = require('../models/user')
const { response } = require('../helpers/helpers')
const JWT = require('jsonwebtoken')

module.exports = {
  userCallback: (req, res) => {
    userModel.userCallback((err, result) => {
      if (err) console.log(err)
      response(res, 200, result)
    })
  },

  userPromise: (req, res) => {
    userModel.userPromise()
      .then(result => response(res, 200, result))
      .catch(err => console.log(err))
  },

  userAsyncAwait: async (req, res) => {
    try {
      const result = await userModel.userPromise()
      res.send(result)
    } catch (error) {
      console.log(error)
    }
  },

  userGetToken: (req, res) => {
    const token = JWT.sign(
      { id: 1, name: 'Tatas Fachrul' },
      process.env.JWT_SECRET,
      {
        expiresIn: '30s'
      })

    response(res, 200, token)
  }
}
