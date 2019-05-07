'use strict';

angular.module('myApp.componentBasicsMod', ['ngRoute'])

  .config([
    '$routeProvider',
    function ($routeProvider) {
      $routeProvider.when('/component-basics', {
        template: '<component-basics-page></component-basics-page>'
      });
    }
  ])

  .component('componentBasicsPage', {
    templateUrl: './features/11-component-basics/index.html',
    controller: [
      function () {
      }
    ]
  });
