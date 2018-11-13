const mongoose = require('mongoose');
require('mongoose-type-url');
mongoose.connect('mongodb://localhost/toPapa', {
  useMongoClient: true,
  /* other options */
});

let photoSchema = mongoose.Schema({
  photo_url: mongoose.SchemaTypes.Url
});

let Photo = mongoose.model('Photo', photoSchema);


let savePhotos = (photos, callback) => {
  photos.forEach(photo => {
    let newPhoto = new Photo({
      url: photo
      // possibly photo.url
    })
  })

  Photo.update(newPhoto, {upset: true}, function(err, raw) {
    if (err) console.log(err);
    callback(null, raw)
  })
}

let getAllPhotos = (callback) => {
  Photo.find()
       .exec((err, pics) => {
         if (err) console.log(err)
         else callback(pics)
       })
}


let letterSchema = mongoose.Schema({
  url: mongoose.SchemaTypes.Url
});

let Letter = mongoose.model('Letter', photoSchema);


let saveLetters = (letters, callback) => {
  letters.forEach(letter => {
    let newLetter = new Letter({
      url: letter
      // possibly letter.url
    })  
  })

  Letter.update(newLetter, {upset: true}, function(err, raw) {
    if (err) console.log(err);
    callback(null, raw)
  })
}

let getAllLetters = (callback) => {
  Letter.find()
       .exec((err, letter) => {
         if (err) console.log(err)
         else callback(letter)
       })
}

module.exports.savePhotos = savePhotos;
module.exports.getAllPhotos = getAllPhotos;
module.exports.saveLetters = saveLetters;
module.exports.getAllLetters = getAllLetters;

//debbielittle
//debbie123

// to view database
// show dbs; use fetcher; db.repos.find()