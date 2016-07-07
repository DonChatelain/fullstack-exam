import angular from 'angular';
import master from './master/master';
import lister from './lister/lister';
import addPokemon from './add-pokemon/add-pokemon';

const components = angular.module('components', [])
  .component('master', master)
  .component('lister', lister)
  .component('addPokemon', addPokemon);

export default components.name;