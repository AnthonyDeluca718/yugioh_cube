const cheerio = require('cheerio')
const axios = require('axios')
const fs = require('fs')
const request = require('request')
const LineByLine = require('line-by-line')

const getImage = ({ name, url, folder }) => {
  axios.get(url)
  .then((res) => {
    const $ = cheerio.load(res.data)
    const $img = $('.cardtable-cardimage').find('img')
    const src = $img.attr('src').split('/revision')[0]
    const srcArray = src.split('.')
    const format = srcArray[srcArray.length - 1]

    request.get(src)
    .pipe(fs.createWriteStream(`./images/${folder}/${name}.${format}`))
  })
  .catch((error) => {
    console.log(name)
  })
}

const getProps = (card, folder) => {
  // name = card.split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join('_')
  name = card.split(' ').join('_')

  return {
    name,
    url: 'https://yugioh.fandom.com/wiki/' + name,
    folder
  }
}

const get_images = (folder) => {
  if (!fs.existsSync(`./images/${folder}`)) {
    fs.mkdirSync(`./images/${folder}`)
  }
  const lr = new LineByLine(`./cardSets/${folder}`)

  lr.on('line', (line) => {
    getImage(getProps(line, folder))
  })
}

get_images(process.argv[2])

// getImage(getProps('dark armed dragon', 'test'))
