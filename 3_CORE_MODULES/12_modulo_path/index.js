const path = require('path')

const customPath = "/relatorios/alexandre/relatorio1.pdf"

// diretorio
console.log(path.dirname(customPath));
// nome do arquivo
console.log(path.basename(customPath));
// tipo do arquivo
console.log(path.extname(customPath));
