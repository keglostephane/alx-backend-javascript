const { expect } = require('chai')
const request = require('request')
const { promisify } = require('util')

const url ='http://localhost:7865'
const requestGet = promisify(request.get)

describe('api index page', function () {

    it('should returns 200 status code', async function() {
        const { statusCode } = await requestGet(url)
        expect(statusCode).to.be.equal(200)
    })
    it('should returns correct message', async function() {
        const { body } = await requestGet(url)
        expect(body).to.be.equal('Welcome to the payment system')
    })
})