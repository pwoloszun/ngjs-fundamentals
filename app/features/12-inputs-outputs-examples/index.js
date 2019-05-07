'use strict';

angular.module('myApp.inputsOutputsMod', ['ngRoute'])

  .config([
    '$routeProvider',
    function ($routeProvider) {
      $routeProvider.when('/io-examples', {
        template: '<inputs-outputs-page></inputs-outputs-page>'
      });
    }
  ])

  .component('inputsOutputsPage', {
    templateUrl: './features/12-inputs-outputs-examples/index.html',
    controller: [
      function () {
      }
    ]
  });
