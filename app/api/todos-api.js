'use strict';

angular.module('myApp.api')
  .factory('todosApi', [
    'DataApiService',
    function (DataApiService) {
      var todosApi = new DataApiService('/api/todos');
      return todosApi;
    }
  ]);
