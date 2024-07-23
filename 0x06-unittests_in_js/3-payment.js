const { Utils } = require('./utils')

module.exports.sendPaymentRequestToApi = function (totalAmount, totalShipping) {
  console.log(`The total is ${Utils.calculateNumber('SUM', totalAmount, totalShipping)}`)
}
