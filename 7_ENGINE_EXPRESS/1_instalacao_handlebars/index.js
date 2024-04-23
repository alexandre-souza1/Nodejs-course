// vamos precisar instalar o Express e o Handlebars, para o correto funcionamento;
// podemos tambem utilizar o Nodemon, para nos ajudar;
// no index precisamos importar os pacotes instalados;
// e tambem adicionar ao Express a engine do Handlebars;
// criaremos uma view no diretorio views, com a extensao handlebars;
// utilizamos o metodo render para enviar esta view para a requisicao.
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home', {layout: false})
});

app.listen(3000, () => {
  console.log('App is Working');
});
