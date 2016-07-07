import angular from 'angular';
import app from './app';
import template from './template.html';
import './scss/main.scss';

document.body.innerHTML = template;
angular.bootstrap(document, [app]);
