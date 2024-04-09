// Para enviar os dados vamos precisar criar um form e mandar os dados via POST para alguma URL;
// No express precisamos colocar alguns middlewares como o express.json para ler os dados do body;
// e tambem uma rota que vai receber esses dados, utilizando o metodo post do express.

const express = require('express')
const app = express()
const port = 3000 // variavel do ambiente

const path = require("path")

// ler o body usando um middleware
app.use(
  express.urlencoded({
    extended: true
  }),
)

app.use(express.json())

const basePath = path.join(__dirname, 'templates')

app.get('/users/add', (req, res) => {
  res.sendFile(`${basePath}/userform.html`)
})

app.post('/users/save', (req, res) => {
  console.log(req.body)

  const name = req.body.name
  const age = req.body.age

  console.log(`The user name is ${name} and he/she have ${age} years`);

  res.sendFile(`${basePath}/userform.html`)
})

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
