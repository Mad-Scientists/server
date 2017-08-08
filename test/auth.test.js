const { expect } = require('chai')
const request = require('supertest')

const app = require('../app')

const AUTH_BASE = '/auth'

describe('Auth', () => {
  it('Should reply with message', () =>
    request(app)
      .get(AUTH_BASE)
      .set('Accept', 'application/json')
      .expect(200)
      .then((response) => {
        expect(response.body).to.deep.equal({
          message: '🔐'
        })
      })
  )
  it('Should create a user', () =>
    request(app)
      .post(`${AUTH_BASE}/signup`)
      .set('Accept', 'application/json')
      .send({
        email: 'things@things.com',
        password: 'password123'
      })
      .expect(200)
      .then((response) => {
        expect(response.body).to.deep.include({
          email: 'things@things.com'
        })
      })
  )
})
