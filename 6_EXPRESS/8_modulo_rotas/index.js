// podemos unir varias rotas em um modulo, isso vai deixar nosso codigo mais organizado;
// normalmente criamos uma pasta ou arquivo que contemem essas rotas;
// que representam uma entidade em comum, como users;
// vamos utilizar um novo objeto chamado Router, e depois colocar as rotas nele;
// depois precisamos exporta-lo e importar no arquivo principal;

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

const basePath = path.join(__dirname, 'templates')

app.use('/users', users)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`App running on the port ${port}`);
})
