'use strict';

angular.module('myApp.formsMod')

  .service('syncValidator', [
    function () {
      var syncValidator = {
        isBetween: function (min, max, value) {
          return min <= value && value <= max;
        }
      };
      return syncValidator;
    }
  ]);
