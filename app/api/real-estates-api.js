'use strict';

angular.module('myApp.api')
  .factory('realEstatesApi', [
    'DataApiService',
    function (DataApiService) {
      return new DataApiService('/api/real-estates');
    }
  ]);
