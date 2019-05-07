'use strict';

angular.module('myApp.api')
  .factory('DataApiService', [
    '$q',
    '$http',
    function ($q, $http) {
      var DELAY = 1800;
      var port = 3100;
      var baseUrl = 'http://localhost:' + port;

      function resolveAfter(data) {
        return $q(function (resolve) {
          setTimeout(function () {
            resolve(data);
          }, DELAY);
        });
      }

      function DataApiService(url) {
        this.url = url;
      }

      DataApiService.prototype.find = function (id) {
        return $http.get(this._getSingleUrl({ id: id }))
          .then(function (response) {
            return response.data;
          })
          .then(function (entity) {
            return resolveAfter(entity);
          });
      };

      DataApiService.prototype.update = function (entity) {
        return $http.put(this._getSingleUrl(entity), entity)
          .then(function (response) {
            return response.data;
          })
          .then(function (entity) {
            return resolveAfter(entity);
          });
      };

      DataApiService.prototype.remove = function (entity) {
        return $http.delete(this._getSingleUrl(entity))
          .then(function () {
            return entity.id;
          })
          .then(function (id) {
            return resolveAfter(id);
          });
      };

      DataApiService.prototype.create = function (entity) {
        return $http.post(this._getUrl(), entity)
          .then(function (response) {
            return response.data;
          })
          .then(function (created) {
            return resolveAfter(created);
          });
      };

      DataApiService.prototype.getAll = function () {
        return $http.get(this._getUrl())
          .then(function (response) {
            return response.data;
          })
          .then(function (data) {
            return resolveAfter(data);
          });
      };

      DataApiService.prototype._getUrl = function () {
        return baseUrl + this.url;
      };

      DataApiService.prototype._getSingleUrl = function (entity) {
        return this._getUrl() + '/' + entity.id;
      };

      return DataApiService;
    }
  ]);

