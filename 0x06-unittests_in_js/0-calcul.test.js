/* eslint-env mocha */
const assert = require('assert')
const calculateNumber = require('./0-calcul')

describe('sum of numbers', function () {
  it('two integers', function () {
    assert.equal(calculateNumber(2, 3), 5)
  })
  it('one integer, one floating point', function () {
    assert.equal(calculateNumber(2.3, 3), 5)
  })
  it('two floating point', function () {
    assert.equal(calculateNumber(2, 3.6), 6)
  })
})
