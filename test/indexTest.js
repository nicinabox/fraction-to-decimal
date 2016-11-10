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

  it('parses html slash entity', () => {
    expect(ftod('1⁄2'), 'to equal', 0.5)
    expect(ftod('1 1⁄2'), 'to equal', 1.5)
  })

  it('parses vulgar fractions', () => {
    expect(ftod('¼'), 'to equal', 0.25)
    expect(ftod('½'), 'to equal', 0.5)
    expect(ftod('¾'), 'to equal', 0.75)
    expect(ftod('1¾'), 'to equal', 1.75)
    expect(ftod('2 ¾'), 'to equal', 2.75)
  })

  it('parses whole numbers', () => {
    expect(ftod('1'), 'to equal', 1)
  })
})
