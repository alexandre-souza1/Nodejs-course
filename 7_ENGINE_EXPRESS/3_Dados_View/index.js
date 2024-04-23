// vamos passar os dados por meio do metodo renderç
// enviamos um objeto com chaves e valores;
// e isso nos possibilita acessar estes dados no template;
//vamos utilizar a sintaxe de {{dado}}
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {

  const user = {
    name: "Alex",
    surname: "Souza",
    age: "30"
  }

  const palavra = 'teste'

  res.render('home', {user: user, palavra})
});

app.listen(3000, () => {
  console.log('App is Working');
});
