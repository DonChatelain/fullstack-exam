import angular from 'angular';
import master from './master/master';
import lister from './lister/lister';

const components = angular.module('components', [])
  .component('master', master)
  .component('lister', lister);

export default components.name;