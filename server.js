require('dotenv/config')
const server = require('express')()
const bodyParser = require('body-parser')
const morgan = require('morgan')

const PORT = process.env.PORT

const route = require('./src/routes')

server.listen(PORT, () => {
  console.log(`This server is running on port ${PORT}`)
})
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(morgan('dev'))

server.use('/', route)
