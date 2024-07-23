/* eslint-env mocha */
const { expect } = require('chai')
const sinon = require('sinon')
const { Utils } = require('./utils')
const sendPaymentRequestToApi = require('./3-payment')

describe('sendPaymentRequestToApi', function createSpy () {
  let spy
  before(function () {
    spy = sinon.spy(Utils, 'calculateNumber')
  })
  after(function RestoreSpy () {
    spy.restore()
  })
  it('should call Utils.calculateNumber with SUM and correct arguments', function () {
    sendPaymentRequestToApi(100, 20)
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.equal(true)
  })
})
