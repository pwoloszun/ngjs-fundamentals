'use strict';

angular.module('myApp.controllerBasicsMod', ['ngRoute'])

  .config([
    '$routeProvider',
    function ($routeProvider) {
      $routeProvider.when('/controller-basics', {
        template: '<controller-basics-page></controller-basics-page>'
      });
    }
  ])

  .component('controllerBasicsPage', {
    templateUrl: './features/01-controllers-basics/index.html',
    controller: [
      function () {
      }
    ]
  });
