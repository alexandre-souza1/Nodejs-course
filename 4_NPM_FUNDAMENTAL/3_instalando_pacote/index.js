// para instalar um pacote vamos utilizar o comando npm install <nome>;
// <nome> sera substituido pelo nome do pacote;
// apos utilizar o comando, a pasta node_modules vai ser criada;
// nela todos os arquivos de modulos de terceiro sao armazenados;
// sempre que rodamos um npm install, a pasta node_modules e recriada com todos os modulos do package.json

const _ = require('lodash') // jquerry = $

const a = [1, 2, 3, 4, 5]
const b = [2, 4, 6, 7, 8]

const diff = _.difference(a, b)

console.log(diff);
