const express = require( 'express' );
const app = express();
const jsonParser =  require('body-parser').json();
const Pokemon = require('./models/pokemon');

app.use( express.static( __dirname + '/public' ) );

app.use( ( req, res, next ) => {
  const url = '*';
  res.header( 'Access-Control-Allow-Origin', url );
  res.header( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE' );
  res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
  next();
});

app.get('/api/pokemon', (req, res) => {
  Pokemon
    .find()
    .then(list => {
      res.json({content: list});
    })
    .catch(err => {
      res.json({error: err});
    });
});

app.post('/api/pokemon', jsonParser, (req, res) => {
  new Pokemon(req.body)
    .save()
    .then(newPokemon => {
      res.json({content: newPokemon});
    })
    .catch(err => {
      res.json({error: err});
    });
});

module.exports = app;