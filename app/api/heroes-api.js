'use strict';

angular.module('myApp.api')
  .factory('heroesApi', [
    'DataApiService',
    function (DataApiService) {
      var api = new DataApiService('/api/heroes');
      return api;
    }
  ]);
