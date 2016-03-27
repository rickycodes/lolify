const vowels = 'aeiou'

const lolify = module.exports = function (str) {
  const rvowels = vowels.split('').sort(function () {
    return 0.5 - Math.random()
  })

  return [].map.call(str, function (l) {
    const index = vowels.indexOf(l)
    return (index >= 0) ? rvowels[ index ] : l
  }).join('')
}
