'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngAnimate',
  'ngAria',
  'ngMaterial',
  'ngResource',
  'ngRoute',

  // app specific
  'myApp.shared',
  'myApp.core',
  'myApp.api',

  // features
  'myApp.controllerBasicsMod',
  'myApp.componentBasicsMod',
  'myApp.inputsOutputsMod',
  'myApp.todosMod',
  'myApp.heroesMod',
  'myApp.citiesMod',
  'myApp.realEstatesMod',

]).config([
  '$locationProvider',
  '$routeProvider',
  '$mdIconProvider',
  function ($locationProvider, $routeProvider, $mdIconProvider) {
    $mdIconProvider.fontSet('md', 'material-icons');

    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({ redirectTo: '/component-basics' });
  }
]);
