'use strict';

angular.module('myApp.formsMod', ['ngRoute'])

  .config([
    '$routeProvider',
    function ($routeProvider) {
      $routeProvider.when('/forms', {
        template: '<my-forms-page></my-forms-page>'
      });
    }
  ])

  .component('myFormsPage', {
    templateUrl: './features/21-forms/index.html',
    controller: [
      function () {
      }
    ]
  });
