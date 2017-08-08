function validUser(user) {
  return user.email && user.email.trim() !== '' && user.password && user.password.trim() !== ''
}

class User {
  constructor(db) {
    this.users = db.get('users')
  }
  create(user) {
    if (validUser(user)) {
      return this.users.insert(user).then((createdUser) => {
        delete createdUser.password
        return createdUser
      })
    }
    return Promise.reject(new Error('Invalid User'))
  }
  getAll() {
    return this.users.find({})
  }
}

module.exports = User
