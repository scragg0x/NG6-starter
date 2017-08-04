import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import heroComponent from './hero.component';

const heroModule = angular.module('hero', [
  uiRouter,
])
  .component('hero', heroComponent)
  .name;

export default heroModule;
