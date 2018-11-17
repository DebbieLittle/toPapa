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

let getAllPhotos = (callback) => {
  Photo.find()
       .exec((err, pics) => {
         if (err) console.log(err)
         else callback(pics)
       })
}


module.exports.getAllPhotos = getAllPhotos;

// ONE TIME SEED
/*
let photos = [
  '//i.imgur.com/O74021Tr.jpg',
  '//i.imgur.com/GHI5kHwr.jpg',
  '//i.imgur.com/IiGNWtX.jpg',
  '//i.imgur.com/52g7QZgr.jpg',
  '//i.imgur.com/rhlxo9H.jpg',
  '//i.imgur.com/NVE1NrK.jpg',
  '//i.imgur.com/NKq0qur.jpg',
  '//i.imgur.com/ZqEgVxm.jpg',
  '//i.imgur.com/fXNE2Yh.jpg',
  '//i.imgur.com/7ejT1fj.jpg',
  '//i.imgur.com/89eTKhG.jpg',
  '//i.imgur.com/5CyHAgS.jpg',
  '//i.imgur.com/cxDwoFl.jpg',
  '//i.imgur.com/uH1zrxz.jpg',
  '//i.imgur.com/GIr0cF0.jpg',
  '//i.imgur.com/Ppd4SJg.jpg',
  '//i.imgur.com/FQEHn3A.jpg',
  '//i.imgur.com/dxnUZIz.jpg',
  '//i.imgur.com/mj4sLzG.jpg',
  '//i.imgur.com/1cWJX9q.jpg',
  '//i.imgur.com/j9BxFwU.jpg',
  '//i.imgur.com/cdTdsqD.jpg',
  '//i.imgur.com/1D9fPyI.jpg',
  '//i.imgur.com/9lYfzE4.jpg',
  '//i.imgur.com/SG9toB2.jpg',
  '//i.imgur.com/yGGTNX9.jpg',
  '//i.imgur.com/1NvDcx5.jpg',
  '//i.imgur.com/g5UVUtb.jpg',
  '//i.imgur.com/mv1Jsm3.jpg',
  '//i.imgur.com/PFPSpX5.jpg',
  '//i.imgur.com/Gh3QMDE.jpg',
  '//i.imgur.com/d9QnD0E.jpg',
  '//i.imgur.com/EDdYblw.jpg',
  '//i.imgur.com/yOWGI5J.jpg',
  '//i.imgur.com/wa7NoKT.jpg',
  '//i.imgur.com/4lTmr0G.jpg',
  '//i.imgur.com/JEitWvP.jpg',
  '//i.imgur.com/eIubz8t.jpg',
  '//i.imgur.com/Gf8ELKF.jpg',
  '//i.imgur.com/7rto1y0.jpg',
  '//i.imgur.com/lgZuJ7H.jpg',
  '//i.imgur.com/AMpqaf1.jpg',
  '//i.imgur.com/jXIKJdq.jpg',
  '//i.imgur.com/km2MUxM.jpg',
  '//i.imgur.com/yjHX0I6.jpg',
  '//i.imgur.com/qoxAUxI.jpg',
  '//i.imgur.com/QgZkG5t.jpg',
  '//i.imgur.com/F0BYopYr.jpg',
  '//i.imgur.com/7VX3tYD.jpg',
  '//i.imgur.com/u2orZHT.jpg',
  '//i.imgur.com/Riuehy6.jpg',
  '//i.imgur.com/uOLQ1lZ.jpg',
  '//i.imgur.com/PO9iMcKr.jpg',
  '//i.imgur.com/vFNsZms.jpg',
  '//i.imgur.com/8C4Aikpr.jpg',
  '//i.imgur.com/QKylZbd.jpg',
  '//i.imgur.com/mJEHvsP.jpg',
  '//i.imgur.com/40HPZXs.jpg',
  '//i.imgur.com/q5igF8M.jpg',
  '//i.imgur.com/DOHRA3K.jpg',
  '//i.imgur.com/VAkVpGD.jpg',
  '//i.imgur.com/Bvfcv7d.jpg',
  '//i.imgur.com/QtLHQSx.jpg',
  '//i.imgur.com/ypZ3Ndyr.jpg',
  '//i.imgur.com/9HejjWV.jpg',
  '//i.imgur.com/wXypBZY.jpg',
  '//i.imgur.com/j8fgR3f.jpg',
  '//i.imgur.com/gthPGsd.jpg',
  '//i.imgur.com/bLO5M1D.jpg',
  '//i.imgur.com/Jfx9sFI.jpg',
  '//i.imgur.com/2gGdWC1.jpg',
  '//i.imgur.com/JqTv6Ce.jpg',
  '//i.imgur.com/HrtJIXB.jpg',
  '//i.imgur.com/soEy57L.jpg',
  '//i.imgur.com/r9CF9e0.jpg',
  '//i.imgur.com/r268Cf3.jpg',
  '//i.imgur.com/oVAzNDB.jpg',
  '//i.imgur.com/2EkB4FY.jpg',
  '//i.imgur.com/nvVI7UV.jpg',
  '//i.imgur.com/ZB1Wmdl.jpg',
  '//i.imgur.com/LihGpbY.jpg',
  '//i.imgur.com/FuzlOce.jpg',
  '//i.imgur.com/L8fYrbw.jpg',
  '//i.imgur.com/NFM7Vtt.jpg',
  '//i.imgur.com/8eq7cAn.jpg',
  '//i.imgur.com/kacF6D2.jpg',
  '//i.imgur.com/Q9m0PZf.jpg',
  '//i.imgur.com/Ar3aOKxr.jpg',
  '//i.imgur.com/sn9qBUg.jpg',
  '//i.imgur.com/7eyY6II.jpg',
  '//i.imgur.com/eLxpM7x.jpg',
  '//i.imgur.com/Qy00lJt.jpg',
  '//i.imgur.com/FOCQj4m.jpg',
  '//i.imgur.com/LOl51CV.jpg',
  '//i.imgur.com/PG1ol1q.jpg',
  '//i.imgur.com/WvtmwiA.jpg',
  '//i.imgur.com/pF3aR6L.jpg',
  '//i.imgur.com/k4CcAe2.jpg',
  '//i.imgur.com/11OW1oir.jpg',
  '//i.imgur.com/O0pHisJ.jpg',
  '//i.imgur.com/3zDahfpr.jpg',
  '//i.imgur.com/yXi5zeL.jpg',
  '//i.imgur.com/8LrtbBj.jpg',
  '//i.imgur.com/DHflwUI.jpg',
  '//i.imgur.com/XrYycjI.jpg',
  '//i.imgur.com/OaV3Gct.jpg',
  '//i.imgur.com/mIEZ2Kd.jpg'
]
*/