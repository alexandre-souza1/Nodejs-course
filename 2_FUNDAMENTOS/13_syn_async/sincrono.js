const fs = require('fs')

console.log('start');

fs.writeFileSync('arquivo.txt', 'oi')

console.log('end');
