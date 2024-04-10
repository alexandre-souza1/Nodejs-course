const express = require('express') //carrega o express
const app = express()
const port = 5000 // cria a porta

const path = require("path") // chama o modulo path
const routes = require('./routes') //adiciona a importacao da pasta de rotas a variavel routes

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

// arquivos estaticos
app.use(express.static('public'))

const basePath = path.join(__dirname, 'templates') // adiciona o endereco (diretorio + pasta template) unido pelo join a variavel basePath

app.use(routes);

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`) // sendFile envia a resposta do arquivo com o caminho `${basePath}/index.html`, que e o template/index
})

// adicionar pagina 404
app.use(function(req, res, next) {
  res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
  console.log(`App running on the port ${port}`);
})
