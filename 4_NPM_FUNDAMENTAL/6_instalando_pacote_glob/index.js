// um pacote global nao fica salva na pasta node_modules do projeto;
// ele fica salvo no computador do usuario;
// a vantagem e que podemos acessar de qualquer local via terminal;
// utilizamos a flag -g em node install.
// ----------------------------------------------------------------
// alguns pacotes sao scripts executaveis, que resultam em alguma acao em nosso computador;
// como por exemplo, a instalacao do react, que e feita pelo npx;
// desta maneira uma serie de processos sao simplificados por este executor.


const _ = require('lodash')


const arr = [1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 6, 6, 6]

console.log(_.sortedUniq(arr));
