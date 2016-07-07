import template from './master.html';

export default {
  template,
  controller
};

controller.$inject = ['$http'];

function controller($http) {

  $http.get('http://localhost:3000/api/pokemon')
    .then(result => {
      this.pokemonList = result.data.content;
    });

  this.addNew = (post) => {
    $http.post('http://localhost:3000/api/pokemon', post)
      .then(result => {
        const newPokemon = result.data.content;
        console.log('success', newPokemon);
        this.pokemonList.push(newPokemon);
      });
  };
}