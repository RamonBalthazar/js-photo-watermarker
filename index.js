const fileSystem = require('fs');

fileSystem.stat('/', function(err, stats) {
  console.log(stats);
});

const Jimp = require("jimp");

// open a file called "lenna.png"
Jimp.read("lena.jpg", function (err, lena) {
    if (err) throw err;
    lena.resize(256, 256)            // resize
        .quality(60)                 // set JPEG quality
        .greyscale()                 // set greyscale
        .write("lena-small-bw.png"); // save
});
