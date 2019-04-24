const fs = require('fs')
const data = require('./cardlist.json')

Object.keys(data).forEach(key => fs.readFileSync(`./image-output/${key}.png`))
