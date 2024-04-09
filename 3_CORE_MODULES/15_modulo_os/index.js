// com o modulo os podemos extrair informacoes do sistema operacional
// tambem e um core module
const os = require('os')

// quantos processadores
console.log(os.cpus());
// memoria disponivel
console.log(os.freemem());
// diretorio home
console.log(os.homedir());
// tipo de sistema operacional
console.log(os.type());
