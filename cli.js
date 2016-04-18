#!/usr/bin/env node

process.stdin.resume()
process.stdin.setEncoding('utf8')

require('meow')({
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

const arg = process.argv[2]
const lolify = require('./')
const output = (str) => process.stdout.write(str + '\n') && process.exit()

if (arg) output(lolify(arg))

process.stdin.on('data', (data) => output(lolify(data)))
