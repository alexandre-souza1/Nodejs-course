const fs = require('fs')

fs.stat("novoarquivo.txt", (err, stats) => {

  if(err) {
    console.log(err)
    return
  }
  // informa se é um arquivo
  console.log(stats.isFile())
  // informa se é um diretorio
  console.log(stats.isDirectory())
  // informa se é um link simbolico
  console.log(stats.isSymbolicLink())
  // data de criacao
  console.log(stats.ctime)
  // tamano do arquivo
  console.log(stats.size)
})
