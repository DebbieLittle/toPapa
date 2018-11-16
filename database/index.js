const mongoose = require('mongoose');
require('mongoose-type-url');
mongoose.connect('mongodb://localhost/toPapa', function (err) {
  if (err) throw err;
  console.log('Successfully connected');

  // ONE TIME SEED
  /*
  photos.forEach(photo => {
    let newPhoto = new Photo({
      url: photo
    })

    Photo.update({url: photo}, newPhoto, {upsert: true}, function(err, raw) {
      if (err) console.log(err);
    })
  })
  */

});

let photoSchema = mongoose.Schema({
  url: mongoose.SchemaTypes.Url
});

let Photo = mongoose.model('Photo', photoSchema);


// let savePhotos = (photos, callback) => {
//   photos.forEach(photo => {
//     let newPhoto = new Photo({
//       url: photo
//       // possibly photo.url
//     })
//   })

//   Photo.update(newPhoto, {upset: true}, function(err, raw) {
//     if (err) console.log(err);
//     callback(null, raw)
//   })
// }

let getAllPhotos = (callback) => {
  Photo.find()
       .exec((err, pics) => {
         if (err) console.log(err)
         else callback(pics)
       })
}


// let letterSchema = mongoose.Schema({
//   url: mongoose.SchemaTypes.Url
// });

// let Letter = mongoose.model('Letter', photoSchema);


// let saveLetters = (letters, callback) => {
//   letters.forEach(letter => {
//     let newLetter = new Letter({
//       url: letter
//     })  
//   })

//   Letter.update(newLetter, {upset: true}, function(err, raw) {
//     if (err) console.log(err);
//     callback(null, raw)
//   })
// }

// let getAllLetters = (callback) => {
//   Letter.find()
//        .exec((err, letter) => {
//          if (err) console.log(err)
//          else callback(letter)
//        })
// }

// module.exports.savePhotos = savePhotos;
module.exports.getAllPhotos = getAllPhotos;
// module.exports.saveLetters = saveLetters;
// module.exports.getAllLetters = getAllLetters;

//debbielittle
//debbie123

// to view database
// show dbs; use fetcher; db.repos.find()

// ONE TIME SEED
/*
let photos = [
  'https://imgur.com/a/ypefE82',
  'https://imgur.com/a/VGrCh8j',
  'https://imgur.com/a/lvRpszr',
  'https://imgur.com/a/wHjiRZg',
  'https://imgur.com/a/K2uEzg5',
  'https://imgur.com/a/oQTrDWY',
  'https://imgur.com/a/wSRD8QL',
  'https://imgur.com/a/XhHJOQP',
  'https://imgur.com/a/ncraOKl',
  'https://imgur.com/a/n7sZKFw',
  'https://imgur.com/a/kG8u3R4',
  'https://imgur.com/a/YPL3ziL',
  'https://imgur.com/a/eODfIKz',
  'https://imgur.com/a/ePWLJis',
  'https://imgur.com/a/pxgoDkV',
  'https://imgur.com/a/kJh2MZy',
  'https://imgur.com/a/PKdJcEv',
  'https://imgur.com/a/9tQplQA',
  'https://imgur.com/a/0E8bCDb',
  'https://imgur.com/a/WSr70cB',
  'https://imgur.com/a/IIVVUyM',
  'https://imgur.com/a/WjyhAdR',
  'https://imgur.com/a/8UZeRq5',
  'https://imgur.com/a/sCXwVdU',
  'https://imgur.com/a/kYlFTeU',
  'https://imgur.com/a/SpeYSjQ',
  'https://imgur.com/a/FatDKVx',
  'https://imgur.com/a/4GJv6DU',
  'https://imgur.com/a/D1WHFBC',
  'https://imgur.com/a/m9nh7v9',
  'https://imgur.com/a/1Q7Kb2W',
  'https://imgur.com/a/yWciNKd',
  'https://imgur.com/a/jPOu8tn',
  'https://imgur.com/a/fC1rfxT',
  'https://imgur.com/a/V2xf4XC',
  'https://imgur.com/a/BjfI4om',
  'https://imgur.com/a/zsjfodL',
  'https://imgur.com/a/LztVa4R',
  'https://imgur.com/a/4r2xpdu',
  'https://imgur.com/a/xX2lIdT',
  'https://imgur.com/a/DL6C9wE',
  'https://imgur.com/a/rIZyBl7',
  'https://imgur.com/a/9has5hw',
  'https://imgur.com/a/pFQ7Z2o',
  'https://imgur.com/a/z0fODrc',
  'https://imgur.com/a/4tuU5zF',
  'https://imgur.com/a/v3629Th',
  'https://imgur.com/a/4ZiXTwi',
  'https://imgur.com/a/c1Oaxnr',
  'https://imgur.com/a/MbHAbcH',
  'https://imgur.com/a/dxrnkbU',
  'https://imgur.com/a/7WM9ymO',
  'https://imgur.com/a/EnjOC4A',
  'https://imgur.com/a/js0w1qb',
  'https://imgur.com/a/AAxIUg4',
  'https://imgur.com/a/uRuDjbc',
  'https://imgur.com/a/2zCPWWe',
  'https://imgur.com/a/OX3l1Yf',
  'https://imgur.com/a/lZGsBHp',
  'https://imgur.com/a/T4cL1gq',
  'https://imgur.com/a/vAnOzge',
  'https://imgur.com/a/HpvGT5Z',
  'https://imgur.com/a/4tvNcO9',
  'https://imgur.com/a/0GVIwhQ',
  'https://imgur.com/a/JPkVW6O',
  'https://imgur.com/a/ydnpIrr',
  'https://imgur.com/a/ou3GlDd',
  'https://imgur.com/a/T1VgKAv',
  'https://imgur.com/a/3Bbni1p',
  'https://imgur.com/a/QgBRmp0',
  'https://imgur.com/a/Y43mjm2',
  'https://imgur.com/a/CAlq13B',
  'https://imgur.com/a/IkbOv14',
  'https://imgur.com/a/OCoqKfX',
  'https://imgur.com/a/SIlVPDH',
  'https://imgur.com/a/6SljQc6',
  'https://imgur.com/a/A6L0hwT',
  'https://imgur.com/a/bWRLAC8',
  'https://imgur.com/a/uvcX7jL',
  'https://imgur.com/a/sn01iES',
  'https://imgur.com/a/AdNC4Uy',
  'https://imgur.com/a/oZ2thRO',
  'https://imgur.com/a/gBs6QMN',
  'https://imgur.com/a/EtwckJY',
  'https://imgur.com/a/zVIDV1l',
  'https://imgur.com/a/oCo8JsD',
  'https://imgur.com/a/KmNQhV9',
  'https://imgur.com/a/DLmv610',
  'https://imgur.com/a/7BhcsZY',
  'https://imgur.com/a/euhWK9k',
  'https://imgur.com/a/iTrlA5q',
  'https://imgur.com/a/ZO3WwFc',
  'https://imgur.com/a/8A5hFCn',
  'https://imgur.com/a/ZhoXoiQ',
  'https://imgur.com/a/r2A7d06',
  'https://imgur.com/a/X1hxn6X',
  'https://imgur.com/a/xbMccKf',
  'https://imgur.com/a/SmGZnL0',
  'https://imgur.com/a/9L9bksg',
  'https://imgur.com/a/EzbBu8y',
  'https://imgur.com/a/NduDN2o',
  'https://imgur.com/a/LDpmLTV',
  'https://imgur.com/a/TnSHTYy',
  'https://imgur.com/a/P5rdGUy',
  'https://imgur.com/a/o11ORWn',
  'https://imgur.com/a/oqnRSda',
  'https://imgur.com/a/5FosZp4'
]
*/