const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
  partialsDir: ['views/partials'],
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'))

app.get('/', (req, res) => {

  const pokemons = [
    {
      name: "pikachu",
      type: "eletric",
      type2: "none",
      number: 25,
      image: "https://e7.pngegg.com/pngimages/978/632/png-clipart-pokemon-pokemon.png"
    },
    {
      name: "charmander",
      type: "fire",
      type2: "none",
      number: 4,
      image: "https://i.pinimg.com/736x/58/0f/81/580f81f43e94d0d3473f9b1b776c9103.jpg"
    },
    {
      name: "bulbasaur",
      type: "grass",
      type2: "poison",
      number: 1,
      image: "https://i.pinimg.com/736x/c6/17/aa/c617aa52286fc2620ca773e6d6b62ffb.jpg"
    },
    {
      name: "squirtle",
      type: "water",
      type2: "none",
      number: 7,
      image: "https://i.pinimg.com/originals/f4/bf/e5/f4bfe51902fe8230dffaa7e6df778476.png"
    },
  ]

  res.render('home', {pokemons})
});

app.listen(3000, () => {
  console.log('App is Working');
});
