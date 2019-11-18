const pool = require('../config/db')

module.exports = {
  userCallback: (cb) => {
    pool.query('SELECT * FROM user', (err, result) => {
      if (err) console.log(err)
      cb(err, result)
    })
  },
  userPromise: () => {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM user', (err, result) => {
        if (err) reject(new Error(err))
        resolve(result)
      })
    })
  }
}
