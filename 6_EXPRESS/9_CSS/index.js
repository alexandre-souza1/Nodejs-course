// para inserir css nas paginas e arquivos estaticos, vamos precisar de um middleware;
// que e o express.static;
// precisamos colocar um diretorio base, que normalmente e o public;
// e criar modelos estaticos a partir dessa pasta;
// no html podemos acessar o caminho relativo apos a pasta definida e pronto!

const express = require('express')
const app = express()
const port = 3000 // variavel do ambiente

const path = require("path")

const users = require('./users')

// ler o body usando um middleware
app.use(
  express.urlencoded({
    extended: true
  }),
)

app.use(express.json())

// arquivos estaticos
app.use(express.static('public'))

const basePath = path.join(__dirname, 'templates')

app.use('/users', users)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

// adicionar pagina 404
app.use(function(req, res, next) {
  res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
  console.log(`App running on the port ${port}`);
})
