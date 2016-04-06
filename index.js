const vowels = 'aeiou'

const shuffle = function (str) {
  return str.split('').sort(function () {
    return 0.5 - Math.random()
  })
}

const replaceLetters = function (str, replaceStr) {
  const rvowels = shuffle(replaceStr)
  return [].map.call(str, function (l) {
    const index = replaceStr.indexOf(l)
    return (index !== -1) ? rvowels[ index ] : l
  }).join('')
}

const lolify = module.exports = function (str) {
  return replaceLetters(replaceLetters(str, vowels), vowels.toUpperCase())
}
