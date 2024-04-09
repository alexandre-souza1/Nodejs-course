// podemos resgatar os parametros da url por meio do req;
// acessamos req.params.<nome>;
// onde nome deve ser o que esta definido na url do express;
// que fica desta forma /users/:id
// neste caso estariamos buscando o usuario no bando de dados pelo id;
// e parametro vem pela url.

const express = require('express')
const app = express()
const port = 3000 // variavel do ambiente

const path = require("path")

const basePath = path.join(__dirname, 'templates')

app.get('/users/:id', (req, res) => {
  const id = req.params.id

  // leitura da tabela users, resgatar um usuario do banco
  console.log(`We are searching for the user: ${id}`);

  res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {

  console.log(`App running on the port ${port}`);

})
