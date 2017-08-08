const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const api = require('./api')
const auth = require('./auth')

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/v1', api)
app.use('/auth', auth)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
/* eslint-disable no-unused-vars */
app.use((err, req, res, next) => {
  // render the error page
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: process.env.NODE_ENV === 'production' ? {} : err.stack
  })
})

module.exports = app
