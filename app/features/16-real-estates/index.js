'use strict';

angular.module('myApp.realEstatesMod', ['ngRoute'])

  .config([
    '$routeProvider',
    function ($routeProvider) {
      $routeProvider.when('/real-estates', {
        template: '<real-estates-page></real-estates-page>'
      });
    }
  ])

  .component('realEstatesPage', {
    templateUrl: './features/16-real-estates/index.html',
    controller: [
      'manageRealEstates',
      function (manageRealEstates) {
        var $ctrl = this;
        $ctrl.service = manageRealEstates;

        $ctrl.metadata = [
          { value: 'street', text: 'Ulica' },
          { value: 'lat', text: 'Wysokosc geo.' },
          { value: 'lng', text: 'Dlugosc geo.' },
        ];

        $ctrl.handleRealEstateClick = function (estate) {
          // TODO
        };

        $ctrl.service.fetch();
      }
    ]
  });
