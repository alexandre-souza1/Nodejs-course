// middlewares sao codigos que podem ser executados no meio/entre de alguma acao e outra;
// por exemplo: verificar se o usuario esta logado, podemos ter um para esta verificacao;
// o metodo que nos da acesso a utilizar middlewares e o use no express.

const express = require('express')
const app = express()
const port = 3000 // variavel do ambiente

const path = require("path")

const basePath = path.join(__dirname, 'templates')

const checkAuth = function(req, res, next) {
  req.authStatus = false

  if(req.authStatus) {
    console.log(`you're logged, can proceed`);
    next()
  } else {
    console.log(`you're not logged, do login to proceed`);
    next()
  }
}

app.use(checkAuth)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {

  console.log(`App running on the port ${port}`);

})
