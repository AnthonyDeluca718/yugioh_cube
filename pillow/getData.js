const cheerio = require('cheerio')
const axios = require('axios')
const fs = require('fs')
const request = require('request')
const LineByLine = require('line-by-line')
const he = require('he') // he for decoding html entities

const getText = ({ name, url, folder }) => {
  axios.get(url)
  .then((res) => {
    const $ = cheerio.load(res.data)

    const $eng = $(".navbox-title:contains('English')").first()
    const $rules = $eng.parent().parent().find('.navbox-list').first()
    $rules.find('br').replaceWith('\n')
    const text = $rules.text().trim()

    const stats = $("th:contains('ATK / DEF')").parent().find("td").text().trim()


    fs.writeFileSync(`./${folder}/${name}.json`, JSON.stringify({
      text,
      stats
    }))

  })
  .catch((error) => {
    console.log('error')
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

const getData = (card, folder) => {
  getText(getProps(card, folder))
}

getData('Accel Synchron', 'test')
