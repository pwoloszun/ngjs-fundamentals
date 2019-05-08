'use strict';

angular.module('myApp.formsMod')

  .service('countriesService', [
    function () {
      var COUNTRIES = [
        'Argentina',
        'Poland',
        'USA',
        'Zimbabwe'
      ];

      return {
        getAll: function () {
          return COUNTRIES;
        }
      };
    }
  ]);
