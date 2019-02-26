const cheerio = require('cheerio')
const axios = require('axios')
const fs = require('fs')
const request = require('request')
const LineByLine = require('line-by-line')

const checkURL = ({ name, url, folder }) => {
  axios.get(url)
  .then((res) => {

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
  const lr = new LineByLine(`./cardSets/${folder}`)

  lr.on('line', (line) => {
    checkURL(getProps(line, folder))
  })
}

get_images(process.argv[2])

// getImage(getProps('dark armed dragon', 'test'))
