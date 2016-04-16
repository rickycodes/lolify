const vowels = 'aeiou'

const shuffle = (str) => str.split('').sort(() => 0.5 - Math.random())

const replaceLetters = (str, replaceStr) => [].map.call(str, function (l) {
  const index = replaceStr.indexOf(l)
  return (index !== -1) ? shuffle(replaceStr)[ index ] : l
}).join('')

module.exports = (str) => replaceLetters(replaceLetters(str, vowels), vowels.toUpperCase())
