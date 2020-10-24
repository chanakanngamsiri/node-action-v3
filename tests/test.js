const assert = require('assert')
const request = require('supertest')
const app = require('../index')


describe('Validate setting the test', () => {
    it('should be ok', () => {
        assert.ok(true)
    })
})

describe('GET "/"', () => {
    it('respond with Hello!', (done) => {
        request(app).get('/').expect('Hello!',done)
    })

})

describe('GET "/items"', () => {
    it('respond with /items', (done) => {
        let want= '[{"id":1,"name":"iphone 12 pro max"},{"id":2,"name":"Googel Pixel 5"}]'
        request(app).get('/items').expect(want,done)
    })
})