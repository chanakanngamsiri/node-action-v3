const assert = require('assert')
const request = require('supertest')
const app = require('../index')

describe('Validate setting the test', () => {
    it('should be ok', () => {
        assert.ok(true)
    })
})

describe('get "/"', () => {
    it('respond with Hello!', (done) =>{
        Request(app).get('/').expect('Hello!',done)
    })
})