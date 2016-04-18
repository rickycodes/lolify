const vowels = 'aeiou'

const shuffle = (str) => str.split('').sort(() => 0.5 - Math.random())

const replaceLetters = (str, replaceStr) => [].map.call(str, (l) =>
  (replaceStr.indexOf(l) !== -1)
  ? shuffle(replaceStr)[ replaceStr.indexOf(l) ]
  : l
).join('')

module.exports = (str) => replaceLetters(replaceLetters(str, vowels), vowels.toUpperCase())
