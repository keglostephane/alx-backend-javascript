/* eslint-env mocha */
const { expect } = require('chai')
const sinon = require('sinon')
const sendPaymentRequestToApi = require('./3-payment')

describe('sendPaymentRequestToApi', function createSpy () {
  let consoleLogSpy
  beforeEach(function () {
    consoleLogSpy = sinon.spy(console, 'log')
  })
  afterEach(function RestoreSpy () {
    consoleLogSpy.restore()
  })
  it('should call sendPaymentRequestToAPI with 100 and 20 ', function () {
    const message = 'The total is: 120'
    sendPaymentRequestToApi(100, 20)
    expect(consoleLogSpy.calledOnceWithExactly(message)).to.be.equal(true)
  })
  it('should call sendPaymentRequestToAPI with 10 and 10', function () {
    const message = 'The total is: 20'
    sendPaymentRequestToApi(10, 10)
    expect(consoleLogSpy.calledOnceWithExactly(message)).to.be.equal(true)
  })
})
