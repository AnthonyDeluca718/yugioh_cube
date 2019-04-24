const { loadData, getProps } = require('./getData')
const fs = require('fs')

const createJSON = (file, name) => {
  const cards = {}

  const lines = fs.readFileSync(file, 'utf-8').split('\n').filter(Boolean)

  const promises = lines.map(line => {
    const props = getProps(line)
    return loadData(props)
      .then(data => cards[props.name] = data)
      .catch(() => console.log(error))
  });

  Promise.all(promises).then(() => fs.writeFileSync(`./${name}.json`, JSON.stringify(cards, null, 4)))
}

createJSON('cardlist2', 'cardlist2')
