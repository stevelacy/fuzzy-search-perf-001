const fuzzy = require('fuzzaldrin-plus')
const items = require('./items')
const TEST_LIB = 'fuzzaldrin-plus'

;(() => {
  console.time(TEST_LIB + ' 1')

  const results = fuzzy.filter(items, 'adm', { key: 'name' })

  console.timeEnd(TEST_LIB + ' 1')

})()

;(() => {
  console.time(TEST_LIB + ' 2')
  const flatItems = []

  for (item of items) {
    flatItems.push(item.name)
  }
  const results = fuzzy.filter(flatItems, 'adm')

  const array = items.filter((item) => {
    return results.indexOf(item.name) !== -1
  })

  console.timeEnd(TEST_LIB + ' 2')
})()
