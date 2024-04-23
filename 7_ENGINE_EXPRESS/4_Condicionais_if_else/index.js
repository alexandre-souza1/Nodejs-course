// utilizar uma estrutura condicional nos permite mais flexibilidade no layout;
// podemos utilizar o if no Handlebars;
// a sintaxe e {{#if alguma coisa}} {{/if}}
// so imprime o que esta entre as condicionais, se o resultado dela for verdadeiro;
// precisamos encaminhar o dado a ser validado pelo backend.
// --------------------------------------------------------
// else
// o else e um complemento do if;
// utilizamos no handlebars para exibicao de outra parte do layout, caso a condicao seja falsa;
// sintaxe e: {{#if alguma coisa}} ... {{else }} ... {{/if}}
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/dashboard', (req, res) => {
  res.render('dashboard')
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
