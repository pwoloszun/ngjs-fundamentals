'use strict';

angular.module('myApp.formsMod')

  .service('asyncValidator', [
    '$q',
    '$timeout',
    function ($q, $timeout) {
      var DELAY = 1500;

      var asyncValidator = {
        validate: function (fn) {
          return $q(function (resolve, reject) {
            $timeout(function () {
              if (fn()) {
                resolve(true);
              } else {
                reject(new Error('Validation error'));
              }
            }, DELAY);
          });
        },

        isBatman: function (name) {
          return this.validate(function () {
            return (/^ba/i).test(name);
          });
        }
      };
      return asyncValidator;
    }
  ]);
