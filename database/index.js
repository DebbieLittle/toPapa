const mongoose = require('mongoose');
require('mongoose-type-url');
mongoose.connect('mongodb://localhost/toPapa');

let photoSchema = mongoose.Schema({
  photo_url: mongoose.SchemaTypes.Url
});

let Photo = mongoose.model('Photo', photoSchema);


let save = (photos, callback) => {
  photos.forEach(photo => {
    let newPhoto = new Photo({
      photo_url: photo.url
    })  
  })

  Photo.update(newPhoto, {upset: trye}, function(err, raw) {
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


module.exports.save = save;
module.exports.find = getAllPhotos;
//debbielittle
//debbie123

// to view database
// show dbs; use fetcher; db.repos.find()