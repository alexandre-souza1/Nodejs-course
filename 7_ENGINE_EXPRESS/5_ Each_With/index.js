// as estruturas de repeticao no handlebars sao feitas pelo operador each;
// a sintaxe e {{#each}} ... {{/each}}
// em um array podemos chamar os itens com {{this}}
// entao cada um dos itens e acessado na view;
// como o handlebars prega um template mais limpo, devemos mandar apenas o neccessario para o front.
// ----------------------------------
// With
// o with nos permite abstrair um objeto;
// ou seja, podemos acessar as propriedades sem nos referenciarmos;
// a sintaxe e {{#with objeto}} ... {{/with}}
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/dashboard', (req, res) => {

  const items = ["item a", "item b", "item c"]

  res.render('dashboard', {items})
})

app.get('/post', (req, res) => {
  
  const post = {
    title: 'learn node.js',
    category: 'javascript',
    body: 'this article will help you to learn node.js',
    comments: 4,
  }

  res.render('blogpost', {post})
})

app.get('/', (req, res) => {

  const user = {
    name: "Alex",
    surname: "Souza",
    age: "30"
  }

  const palavra = 'teste'

  const auth = true

  const approved = false

  res.render('home', {user: user, palavra, auth, approved})
});

app.listen(3000, () => {
  console.log('App is Working');
});
