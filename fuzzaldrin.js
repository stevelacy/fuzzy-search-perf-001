const fuzzy = require('fuzzaldrin')
const items = require('./items')
const TEST_LIB = 'fuzzaldrin'

console.time(TEST_LIB)

const results = fuzzy.filter(items, 'adm', { key: 'name' })
console.log(results)

console.timeEnd(TEST_LIB)
