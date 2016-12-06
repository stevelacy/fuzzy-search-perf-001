const fuzzy = require('fuzzysearch')
const items = require('./items')
const TEST_LIB = 'fuzzysearch'

;(() => {
  console.time(TEST_LIB + ' 1')

  const results = items.filter((item) => {
    return fuzzy('adm', item.name)
  })

  console.timeEnd(TEST_LIB + ' 1')
})()
