const jwt = require('jsonwebtoken')

require('dotenv').config()

function createToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.TOKEN_SECRET, {}, (error, token) => {
      if (error) return reject(error)
      return resolve(token)
    })
  })
}

function decodeToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.TOKEN_SECRET, (error, payload) => {
      if (error) return reject(error)
      return resolve(payload)
    })
  })
}

module.exports = {
  createToken,
  decodeToken
}
