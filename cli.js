#!/usr/bin/env node

process.stdin.resume()
process.stdin.setEncoding('utf8')

const arg = process.argv[2]
const lolify = require('./')
const meow = require('meow')

const cli = meow({
  requireInput: true,
  help: [
    'Usage',
    '  lolify "hello how are you?"',
    '  => `hallo how era you?`',
    'Or',
    '  echo "i like cats" | lolify',
    '  => `a lake cits`'
  ].join('\n')
})

function output (str) {
  process.stdout.write(str + '\n')
  process.exit()
}

if (arg) output(lolify(arg))

process.stdin.on('data', function (data) {
  output(lolify(data))
})
