// para enviar HTML como resposta utilizamos o metodo sendFile;
// isso faz com que o arquivo seja renderizado no navegador;
// precisamos acessar o arquivo por meio do diretorio base, isso requer o modulo path.


const express = require('express')
const app = express()
const port = 3000 // variavel do ambiente

const path = require("path")

const basePath = path.join(__dirname, 'templates')

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {

  console.log(`App running on the port ${port}`);

})
