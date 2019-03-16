// text = `text = 1 Tuner + 1 or more non-Tuner monsters
// Once per turn: You can send 1 "Synchron" monster from your Deck to the Graveyard, then activate 1 of these effects;
// ● Increase this card's Level by the Level of the sent monster.
// ● Reduce this card's Level by the Level of the sent monster.
// During your opponent's Main Phase, you can: Immediately after this effect resolves, Synchro Summon 1 Synchro Monster, using Materials including this card you control (this is a Quick Effect). You can only Synchro Summon "Accel Synchron(s)" once per turn.`
//
// stats = `500 / 2100`
//
// types = `Machine / Synchro / Tuner / Effect`
//
// name = `Accel Synchron`

const Jimp = require('jimp')

let font
Jimp.read('./accel.png')
.then(image => {
Jimp.loadFont(pathOrURL).then(font => {
// load font from .fnt file
image.print(font, x, y, message)
})


// .then(() => {
//     image.print(
//       font,
//       0,
//       0,
//       {
//         text: 'Hello world!',
//         alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
//         alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
//       }
//     ) // prints 'Hello world!' on an image, middle and center-aligned
// })
// .then(() => {
//     image.write('new.png', () => {})
// })

// Jimp.loadFont('/Library/Fonts/Arial.ttf').then(font => {
//   image.print(
//     font,
//     x,
//     y,
//     {
//       text: 'Hello world!',
//       alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
//       alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
//     },
//     maxWidth,
//     maxHeight
//   ) // prints 'Hello world!' on an image, middle and center-aligned
// })
