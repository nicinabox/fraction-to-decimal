var expect = require('unexpected')
var ftod = require('../index')

describe('fraction to decimal', () => {
  it('converts fractions', () => {
    expect(ftod('1/2'), 'to equal', 0.5)
    expect(ftod('3/2'), 'to equal', 1.5)
  })

  it('converts mixed numbers', () => {
    expect(ftod('1 1/2'), 'to equal', 1.5)
    expect(ftod('9 3/4'), 'to equal', 9.75)
  })
})
