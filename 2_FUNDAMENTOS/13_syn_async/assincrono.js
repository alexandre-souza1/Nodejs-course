const fs = require('fs')
console.log('start')

fs.writeFile("arquivo.txt", "oi", function(err) {
  setTimeout(function() {
    console.log("File created!")
  }, 1000)
})

console.log("end");
