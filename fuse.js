const Fuzzy = require('fuse.js')
const items = require('./items')
const TEST_LIB = 'fuse.js'

;(() => {
  console.time(TEST_LIB)

  const fuzzy = new Fuzzy(items, {
    keys: ['name'],
    threshold: '0.34'
  })
  const results = fuzzy.search('adm')

  console.timeEnd(TEST_LIB)
})()
