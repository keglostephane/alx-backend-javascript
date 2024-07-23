/* eslint-env mocha */
const expect = require('chai').expect
const calculateNumber = require('./2-calcul_chai')

describe('calculate numbers', function () {
  it('numbers addition', function () {
    expect(calculateNumber('SUM', 2.3, 3)).to.equal(5)
  })
  it('numbers difference', function () {
    expect(calculateNumber('SUBTRACT', 3.2, 2.5)).to.equal(0)
  })
  it('numbers division', function () {
    expect(calculateNumber('DIVIDE', 3.7, 2.3)).to.equal(2)
  })
  it('zero division', function () {
    expect(calculateNumber('DIVIDE', 2.5, 0.4)).to.equal('Error')
  })
})
