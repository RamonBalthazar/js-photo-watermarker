const fileSystem = require('fs');

fileSystem.stat('/', function(err, stats) {
  console.log(stats);
});

// test(process.argv[2]);
//
// function test(argument) {
//   console.log(argument);
// }
