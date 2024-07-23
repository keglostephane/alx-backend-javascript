/* eslint-env mocha */
const { expect } = require('chai')
const getPaymentTokenFromAPI = require('./6-payment_token')

describe('getPaymentTokenFromAPI', function () {
  it('should success', async function () {
    const response = await getPaymentTokenFromAPI(true)
    expect(response).to.deep.equal({ data: 'Successful response from the API' })
  })
  it('should failed', async function () {
    try {
      await getPaymentTokenFromAPI(false)
    } catch (error) {
      expect(error).to.be.equal(undefined)
    }
  })
})
