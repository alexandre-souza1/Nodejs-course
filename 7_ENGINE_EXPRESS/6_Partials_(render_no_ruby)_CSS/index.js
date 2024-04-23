// partials sao como minitemplates, que precisam ser repetidos em diversos locais da nossa aplicacao;
// precisamos realizar algumas modificacoes na implementacao do handlebars;
// partials geralmente ficam em views/partials;
// a sintaxe e: {{>partial}}
// ----------------------------------------
// CSS
// a inclusao do CSS no handlebars e muito semelhante a que realizamos apenas com express;
// precisamos definir a pasta dos arquivos estaticos;
// e vamos linkar o CSS com o nosso layout em comum para todas as paginas.
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
  partialsDir: ['views/partials'],
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'))

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

app.get('/blog', (req, res) => {
  const posts = [
  {
    title: 'learn node.js',
    category: 'javascript',
    body: 'this article will help you to learn node.js',
    comments: 4,
  },
  {
    title: 'learn PHP',
    category: 'PHP',
    body: 'this article will help you to learn PHP',
    comments: 6,
  },
  {
    title: 'learn Phyton',
    category: 'Phyton',
    body: 'this article will help you to learn Phyton',
    comments: 9,
  }
]

  res.render('blog', {posts})
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
