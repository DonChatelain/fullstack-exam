import template from './lister.html';

export default {
  template,
  controllerAs: 'lister',
  controller
};

controller.$inject = ['$http'];

function controller($http) {
  this.fuck = 'fuck';
  console.log('hello from lister controller');
  $http.get('http://localhost:3000/api/pokemon')
    .then(result => {
      this.pokemonList = result.data.content;
    });
}