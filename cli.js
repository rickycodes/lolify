#!/usr/bin/env node

const lolify = require('./')()
const meow = require('meow')

const cli = meow({
  requireInput: true,
  help: [
    'Usage',
    '  lolify "hello how are you?"',
    '  => `hallo how era you?`'
  ].join('\n')
})

console.log(lolify)
