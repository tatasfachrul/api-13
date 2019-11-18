const uuid = require('uuid/v4')
module.exports = {
  response: (res, status, data) => {
    const result = {}

    result.uuid = uuid()
    result.status = status
    result.result = data

    return res.status(result.status).json(result)
  }
}
