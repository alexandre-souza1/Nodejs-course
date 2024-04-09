// ----------------------------------------------------------------
// para remover um pacote utilizamos o comando npm uninstall <nome-do-pacote>
// isso faz com que o pacote seja removido do package.json tambem.

const _ = require('lodash') // jquerry = $
const chalk = require('chalk')

const a = [1, 2, 3, 4, 5]
const b = [2, 4, 6, 7, 8]

const diff = _.difference(a, b)

console.log(chalk.red.bold(diff));
