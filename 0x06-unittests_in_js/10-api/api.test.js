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

describe('available_payments endpoint', function () {
    it('should return the payments methods', function (done) {
        request.get(`${url}/available_payments`, function(error, response, body) {
            expect(response.statusCode).to.equal(200)
            expect(JSON.parse(body)).to.deep.equal({
                payment_methods: {
                    credit_cards: true,
                    paypal: false
                }
            })
            done()
        })
    })
})

describe('/login endpoint', function () {
    it('should return the correct message', function(done) {
        const options = {
            url: `${url}/login`,
            method: 'POST',
            json: {
                userName: 'John'
            }
        }
        request(options, function(error, response, body) {
            expect(response.statusCode).to.equal(200)
            expect(body).to.equal('Welcome John')
            done()
        })
    })
})

