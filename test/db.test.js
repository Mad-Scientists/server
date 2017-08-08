const { expect } = require('chai')

const db = require('../db')
const { User } = require('../models')

describe('DB', () => {
  beforeEach(() => db.get('users').drop())

  it('Should connect to the DB', () => {
    expect(() => {
      db.then(() => {
        console.log('Connected correctly to server')
      })
    }).to.not.throw()
  })

  describe('User', () => {
    it('Should create a user', () => {
      User.create({
        email: 'things@things.com',
        password: 'password123'
      }).then((user) => {
        expect(user.email).to.equal('things@things.com')
      })
    })

    it('Should get all users', () => {
      User.getAll().then((users) => {
        expect(users.length).to.equal(1)
        expect(users[0].email).to.equal('things@things.com')
      })
    })
  })
})
