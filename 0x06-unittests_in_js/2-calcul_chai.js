function calculateNumber (type, a, b) {
  if (type === 'SUM') return Math.round(a) + Math.round(b)
  else if (type === 'SUBTRACT') return Math.round(a) - Math.round(b)
  else if (type === 'DIVIDE') return Math.round(b) ? Math.round(a) / Math.round(b) : 'Error'
}

module.exports = calculateNumber
