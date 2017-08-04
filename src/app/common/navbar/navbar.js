import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import navbarComponent from './navbar.component';

const navbarModule = angular.module('navbar', [
  uiRouter,
])
  .component('navbar', navbarComponent)
  .name;

export default navbarModule;
