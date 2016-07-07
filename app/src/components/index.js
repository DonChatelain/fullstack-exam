import angular from 'angular';
import master from './master/master';

const components = angular.module('components', [])
  .component('master', master);

export default components.name;