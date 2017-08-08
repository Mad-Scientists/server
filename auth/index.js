const express = require('express')

const router = express.Router()
const { User } = require('../models')

router.get('/', (req, res) => {
  res.json({
    message: '🔐'
  })
})

router.post('/signup', (req, res, next) => {
  User
    .create(req.body)
    .then(user => res.json(user))
    .catch(next)
})

module.exports = router
