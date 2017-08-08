const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    message: '🔐'
  })
})

router.post('/signup', (req, res) => {
  res.json({
    email: 'things@things.com',
    id: 1
  })
})

module.exports = router
