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
    // console.log($)

    // const $img = $('.cardtable-cardimage').find('img')
    // const src = $img.attr('src').split('/revision')[0]
    // const srcArray = src.split('.')
    // const format = srcArray[srcArray.length - 1]
    // request.get(src)
    // .pipe(fs.createWriteStream(`./images/${folder}/${name}.${format}`))

    const $eng = $(".navbox-title:contains('English')").first()
    // console.log( $eng.parent().parent().innerTtext() )
    const $rules = $eng.parent().parent().find('.navbox-list').first()
    $rules.find('br').replaceWith('\n')
    const text = $rules.text()
    console.log(text)

    // eng.parent().parent().find('.navbox-list').first()[0].innerText - what we want

    // var myhtml = $rules.html().replace(/<(?:.|\n)*?>/gm, '\n') // remove all html tags
    // var mytext = he.decode(myhtml)
    // console.log(mytext)

    // console.log($rules[0].innerText)
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

getData('Accel Synchron', 'misc')
