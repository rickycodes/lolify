const vowels = 'aeiou'
const arg = process.argv[2]

module.exports = function () {
  if (!arg) {
    return
  }

  const rvowels = vowels.split('').sort(function () {
    return 0.5 - Math.random()
  })

  return [].map.call(arg, function (l) {
    const index = vowels.indexOf(l)
    return (index >= 0) ? rvowels[ index ] : l
  }).join('')
}
