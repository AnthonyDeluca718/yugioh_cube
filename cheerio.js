const cheerio = require('cheerio')
const axios = require('axios')
const fs = require('fs')
const request = require('request')

const getImage = ({ name, url, folder }) => {
  console.log(url)
  axios.get(url)
  .then((res) => {
    const $ = cheerio.load(res.data)
    const $img = $('.cardtable-cardimage').find('img')
    const src = $img.attr('src').split('/revision')[0]
    const srcArray = src.split('.')
    const format = srcArray[srcArray.length - 1]

    request.get(src)
    .pipe(fs.createWriteStream(`${name}.${format}`))
  })
  .catch((error) => {
    console.log(name)
  })
}

const getProps = (card, folder) => {
  name = card.split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join('_')

  return {
    name,
    url: 'https://yugioh.fandom.com/wiki/' + name,
    folder
  }
}

getImage(getProps('dark armed dragon', 'test'))
