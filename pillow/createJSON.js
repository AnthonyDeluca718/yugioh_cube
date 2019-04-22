const getData = require('./getData')
const fs = require('fs')

// const LineByLine = require('line-by-line')

// getData('Judgement Dragon', 'test')

const createJSON = (file, folder, name) => {
  if (!fs.existsSync(`./${folder}`)) {
    fs.mkdirSync(`./${folder}`)
  }

  const cards = {}

  const lines = fs.readFileSync(file, 'utf-8').split('\n').filter(Boolean)

  const promises = lines.map(line => {
    return getData(line)
      .then(data => cards[line] = data)
      .catch(() => console.log(error))
  });

  Promise.all(promises).then(() => fs.writeFileSync(`./${folder}/${name}.json`, JSON.stringify(cards, null, 4)))
}

createJSON('testList', 'test', 'cardlist')
