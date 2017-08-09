const bcrypt = require('bcrypt')

const { createToken } = require('../auth/utils')

function validUser(user) {
  return user.email && user.email.trim() !== '' && user.password && user.password.trim() !== ''
}

class User {
  constructor(db) {
    this.users = db.get('users')
    this.users.createIndex('email')
  }
  create(user) {
    if (validUser(user)) {
      return bcrypt
        .hash(user.password, 12)
        .then((hash) => {
          user.password = hash
          return this.users
            .insert(user)
            .then((createdUser) => {
              delete createdUser.password
              return createdUser
            })
        })
    }
    return Promise.reject(new Error('Invalid User'))
  }
  find(findUser) {
    if (validUser(findUser)) {
      return this.users.findOne({
        email: findUser.email
      }).then((user) => {
        if (user) {
          return bcrypt
            .compare(findUser.password, user.password)
            .then((res) => {
              if (res) {
                delete user.password
                return createToken(user)
              }
              return Promise.reject(new Error('Invalid password'))
            })
        }
        return Promise.reject(new Error('User not found'))
      })
    }
    return Promise.reject(new Error('Invalid User'))
  }
  getAll() {
    return this.users.find({})
  }
}

module.exports = User
