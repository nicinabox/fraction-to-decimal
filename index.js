const vulgarFractions = {
  '¼': '1/4',
  '½': '1/2',
  '¾': '3/4'
}

const isVulgarFraction = (fraction) => {
  let keys = Object.keys(vulgarFractions)
  return keys.includes(fraction) || keys.some(f => fraction.includes(f))
}

let toFloat = (fraction) => {
  let [num, denom] = fraction.split(/[\/⁄]/)
  return num / denom
}

module.exports = function fractionToDecimal (mixedNumber) {
  if (/\s/.test(mixedNumber)) {
    let [integer, fraction] = mixedNumber.split(' ')
    return +integer + fractionToDecimal(fraction)
  }

  if ((/^\d+/.test(mixedNumber) && isVulgarFraction(mixedNumber))) {
    let [, integer, fraction] = mixedNumber.match(/^(\d+)(.+)/)
    return +integer + fractionToDecimal(vulgarFractions[fraction])
  }

  if (isVulgarFraction(mixedNumber)) {
    return toFloat(vulgarFractions[mixedNumber])
  }

  return toFloat(mixedNumber)
}
