// ha uma possibilidade de instalar pacotes apenas para o ambiente de desenvolvimento;
// utilizamos a flag --save-dev;
// isso faz com que ele seja separado no package.json dos demais;
// e entao na build de producao nao instlaremos esses modulos;
// exemplo: servidor para ambiente loca, como o nodemon.
// --------------------------------------------------------
// constantemente os pacotes do npm sao atualizados por seus desenvolvedores;
// temos entao o comando npm update que faz uma atualizacao dos pacotes instalados no package.json;
// e possivel atualizar apenas um pacote especificando o nome no comando npm update <nome> e forcar atualizacao com o comando npx update


const _ = require('lodash') // jquerry = $
const chalk = require('chalk')

const a = [1, 2, 3, 4, 5]
const b = [2, 4, 6, 7, 8]

const diff = _.difference(a, b)

console.log(chalk.red.bold(diff));
