require('dotenv').config()
const compression = require('compression')
const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const app = express()

console.log(`Process::`, process.env)
// init middlerwares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())

// init db
require('./dbs/init.mongodb')
const { checkOverload } = require('./helpers/check.connect')
checkOverload()
// init routes
app.get('/', (req, res, next) => {
  // const strCompress = ' Hello boyysss '

  return res.status(200).json({
    message: "welcome you",
    // metadata: strCompress.repeat(10000)
  })
})
// handling error

module.exports = app