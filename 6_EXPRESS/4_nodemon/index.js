// precisamos toda vez reiniciar o servidor para receber as atualizacoes, isso e muito custoso;
// vamos entao instalar o modulo Nodemon;
// que a cada vez que o arquivo e salvo reinicia o projeot, facilitando a nossa vida;
// vamos salvar como dependencia do desenvolvimento(--save-dev).

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
