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
    it('Should create a user', () =>
      User.create({
        email: 'things2@things.com',
        password: 'password123'
      }).then((user) => {
        expect(user.email).to.equal('things2@things.com')
      })
    )
  })
})
