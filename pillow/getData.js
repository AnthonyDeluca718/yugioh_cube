const cheerio = require('cheerio')
const axios = require('axios')
const fs = require('fs')
const request = require('request')
const LineByLine = require('line-by-line')
const he = require('he') // he for decoding html entities

const getText = ({ name, url }) => {
  return axios.get(url)
  .then((res) => {
    const $ = cheerio.load(res.data)

    const $eng = $(".navbox-title:contains('English')").first()
    const $rules = $eng.parent().parent().find('.navbox-list').first()
    $rules.find('br').replaceWith('\n')
    const text = $rules.text().trim()
    let data = {
      name: 'YOLO CASH MONEY'
    }

    const cardTypeContainer = $("th:contains('Card type')")
    const cardType = cardTypeContainer && cardTypeContainer.parent().find("td a").first().text().trim()

    if (cardType == 'Spell' || cardType == 'Trap') {
      data = {
        card_type: cardType,
        text
      }
    } else {
      const stats = $("th:contains('ATK / DEF')").parent().find("td").text().trim()
      const types = $("th:contains('Types')").parent().find("td").text().trim()

      data = {
        card_type: cardType,
        text,
        stats,
        types
      }
    }

    return data
  })
  .catch((error) => {
    console.log(error)
  })
}

const getProps = (card, folder) => {
  name = card.split(' ').join('_')

  return {
    name,
    url: 'https://yugioh.fandom.com/wiki/' + name,
    folder
  }
}

const getData = (card) => {
  return getText(getProps(card))
}

const writeData = (card, folder) => {
  getData(card)
  .then(data => fs.writeFileSync(`./${folder}/${name}.json`, JSON.stringify(data, null, 4)))
  .catch(() => console.log('error'))
}

writeData('Trap Hole', 'test')

module.exports = getData
