'use strict';

angular.module('myApp.formsMod')

  .service('interestsService', [
    '$q',
    '$timeout',
    function ($q, $timeout) {
      var interestsMap = {
        hobby: ['patchwork', 'programming', 'video gaming'],
        sport: ['soccer', 'basketball', 'hockey', 'ski-jumping'],
        culture: ['books', 'films', 'poetry'],
      };

      var delay = 1800;

      return {
        getInterestsBy: function (typesMap) {
          var types = Object.keys(typesMap)
            .filter(function (type) {
              return !!typesMap[type];
            });

          return $q(function (resolve) {
            $timeout(function () {
              var results = types.reduce((memo, type) => {
                return memo.concat(interestsMap[type]);
              }, []);
              resolve(results);
            }, delay);
          });
        },

        getTypes: function () {
          return Object.keys(interestsMap);
        }
      };
    }
  ]);
