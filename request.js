var fs = require('fs'),
    request = require('request');

// var download = function(uri, filename, callback){
//   request.head(uri, function(err, res, body){
//     console.log('content-type:', res.headers['content-type']);
//     console.log('content-length:', res.headers['content-length']);
//
//     request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
//   });
// };
//
// download('https://vignette.wikia.nocookie.net/yugioh/images/a/ad/DarkArmedDragon-LCKC-EN-ScR-1E.png/revision/latest/scale-to-width-down/300?cb=20180323180912', 'images/test/dad-2.png', function(){
//   console.log('done');
// });

request
.get('https://vignette.wikia.nocookie.net/yugioh/images/a/ad/DarkArmedDragon-LCKC-EN-ScR-1E8.png')
.on('error', function(err) {
  console.log('error')
})
.pipe(fs.createWriteStream('doodle.png'))
