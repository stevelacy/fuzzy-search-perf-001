const fs = require('fs')
const names = require('./names')({
  amount: 500,
  region: 'United States'
})

names.then((list) => {
  fs.writeFileSync('./items.json', JSON.stringify(list), 'utf8')
})
