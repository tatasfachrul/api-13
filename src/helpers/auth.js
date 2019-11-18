require('dotenv/config')

const JWT = require('jsonwebtoken')

module.exports = {
  tokenVerify: (req, res, next) => {
    const token = req.headers.authorization
    JWT.verify(token, process.env.JWT_SECRET, (err, result) => {
      if (err && err.name === 'TokenExpiredError') res.send('Token Expired')
      if (err && err.name === 'JsonWebTokenError') res.send('Token Error')
      next()
    })
  }
}
