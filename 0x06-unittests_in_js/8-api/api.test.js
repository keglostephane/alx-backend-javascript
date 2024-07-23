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