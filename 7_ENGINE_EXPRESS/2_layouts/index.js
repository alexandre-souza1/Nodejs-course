// podemos criar layouts para reaproveitar codigo entre as paginas;
// vamos criar uma pasta chamada layouts em views;
// e nela criamos o template que sera repetido;
// colocamos uma tag especial {{body}};
// para que neste local o corpo do site seja inserido;
// em todas as nossas views agora o layout e repetido.
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home')
});

app.listen(3000, () => {
  console.log('App is Working');
});
