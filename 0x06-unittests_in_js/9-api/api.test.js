const { expect } = require('chai')
const request = require('request')

const url ='http://localhost:7865'

describe('api index page', function () {
    it('should returns 200 status code', function(done) {
        request.get(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200)
            done()
        })
    })
    it('should returns correct message', function(done) {
        request.get(url, function(error, response, body) {
            expect(body).to.equal('Welcome to the payment system')
            done()
        })
    })
})

describe('api cart endpoint', function () {
    it('should return status code 200 when id is a number', function(done) {
        request.get(`${url}/cart/12`, function(error, response, body) {
            expect(response.statusCode).to.equal(200)
            done()
        })
    })
    it('should return the correct message when id is a number', function(done) {
        request.get(`${url}/cart/12`, function(error, response, body) {
            expect(body).to.equal('Payment methods for cart 12')
            done()
        })
    })
    it('should return status code 404 when id is not a number', function(done) {
        request.get(`${url}/cart/abc`, function(error, response, body) {
            expect(response.statusCode).to.equal(404)
            done()
        })
    })
})