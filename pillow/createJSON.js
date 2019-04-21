const getData = require('./getData')

const fs = require('fs')
// const LineByLine = require('line-by-line')

// getData('Judgement Dragon', 'test')

const createJSON = (file, folder) => {
  if (!fs.existsSync(`./${folder}`)) {
    fs.mkdirSync(`./${folder}`)
  }
  // const lr = new LineByLine(`./${file}`)
  // let lines = []
  //
  // lr.on('line', (line) => {
  //   lines.push(line)
  // })
  const lines = fs.readFileSync(file, 'utf-8').split('\n').filter(Boolean)

  console.log(lines)
}

createJSON('testList', 'test')
