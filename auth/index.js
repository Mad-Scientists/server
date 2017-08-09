const express = require('express')

const router = express.Router()
const { User } = require('../models')
const { createToken } = require('./utils')

router.get('/', (req, res) => {
  res.json({
    message: '🔐'
  })
})

router.post('/signup', (req, res, next) => {
  User
    .create(req.body)
    .then(createToken)
    .then(token => res.json({ token }))
    .catch(next)
})

router.post('/login', (req, res, next) => {
  User
    .find(req.body)
    .then(createToken)
    .then(token => res.json({ token }))
    .catch(next)
})

module.exports = router
