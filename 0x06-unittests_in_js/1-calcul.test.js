/* eslint-env mocha */
const assert = require('assert')
const calculateNumber = require('./1-calcul')

describe('calculate numbers', function () {
  it('numbers addition', function () {
    assert.equal(calculateNumber('SUM', 2.3, 3), 5)
  })
  it('numbers difference', function () {
    assert.equal(calculateNumber('SUBTRACT', 3.2, 2.5), 0)
  })
  it('numbers division', function () {
    assert.equal(calculateNumber('DIVIDE', 3.7, 2.3), 2)
  })
  it('zero division', function () {
    assert.equal(calculateNumber('DIVIDE', 2.5, 0.4), 'Error')
  })
})
