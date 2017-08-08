const db = require('../db')
const User = require('./User')

module.exports = {
  User: new User(db)
}
