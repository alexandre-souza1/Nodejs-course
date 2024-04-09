// rota e um conceito super importante e presente em aplicacoes web;
// basicamente sao as URL que acessamos;
// se criamos uma rota /produtos, podemos acessar atraves da URL site.com/produtos;
// quando um usuario acessa podemos acessar varias logicas, como carregar produtos de banco de dados;
// ou seja, rotas sao uma ponte entre o usuario e a logica da aplicacao.'

// o setup inicial do express e simples, mas precisamos seguir uns passos;
// importar o express e invoca-lo;
// definir uma porta base para a aplicacao;
// criar uma rota (URL que sera acessada);
// executar o metodo listen na porta especificada.


const express = require('express')
const app = express()
const port = 3000 // variavel do ambiente


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {

  console.log(`App running on the port ${port}`);

})
