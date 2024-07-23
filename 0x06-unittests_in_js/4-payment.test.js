/* eslint-env mocha */
const { expect } = require('chai')
const sinon = require('sinon')
const sendPaymentRequestToApi = require('./3-payment')
const Utils = require('./utils.js')

describe('sendPaymentRequestToApi', function createSpy () {
  let calculateNumberStub
  let consoleLogSpy
  beforeEach(function () {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10)
    consoleLogSpy = sinon.spy(console, 'log')
  })
  afterEach(function RestoreSpy () {
    calculateNumberStub.restore()
    consoleLogSpy.restore()
  })
  it('should returns 10', function () {
    sendPaymentRequestToApi(100, 20)
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.equal(true)
    expect(calculateNumberStub('SUM', 100, 20)).to.be.equal(10)
  })
  it('should display The total is: 10', function () {
    const message = 'The total is: 10'
    sendPaymentRequestToApi(100, 20)
    expect(consoleLogSpy.calledOnceWithExactly(message)).to.be.equal(true)
  })
})
