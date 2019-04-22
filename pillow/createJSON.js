const { loadData, getProps } = require('./getData')
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
    const props = getProps(line)
    return loadData(props)
      .then(data => cards[props.name] = data)
      .catch(() => console.log(error))
  });

  Promise.all(promises).then(() => fs.writeFileSync(`./${folder}/${name}.json`, JSON.stringify(cards, null, 4)))
}

createJSON('testList', 'test2', 'cardlist')
