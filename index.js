let toFloat = (fraction) => {
  let [num, denom] = fraction.split('/')
  return num / denom
}

module.exports = function (mixedNumber) {
  if (/\s/.test(mixedNumber)) {
    let [integer, fraction] = mixedNumber.split(' ')
    return +integer + toFloat(fraction)
  } else {
    return toFloat(mixedNumber)
  }
}
