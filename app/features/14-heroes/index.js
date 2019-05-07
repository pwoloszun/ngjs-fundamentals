'use strict';

angular.module('myApp.heroesMod', ['ngRoute'])

  .config([
    '$routeProvider',
    function ($routeProvider) {
      $routeProvider.when('/heroes', {
        template: '<heroes-page></heroes-page>'
      });
    }
  ])

  .component('heroesPage', {
    templateUrl: './features/14-heroes/index.html',
    controller: [
      'heroesApi',
      function (heroesApi) {
        var $ctrl = this;
        $ctrl.selectedHero = null;
        $ctrl.superHeroes = [];

        $ctrl.tableHeaders = [
          { value: "universe", text: "Comic Universe" },
          { value: "name", text: "Hero Name" },
          { value: "secretIdentity", text: "True Identity" }
        ];

        $ctrl.handleHeroClick = function (superHero) {
          console.log("clicked super hero", superHero);
          // TODO
        };

        heroesApi.getAll()
          .then(function (heroes) {
            console.log('fetched users', heroes);
            // TODO
          })
          .catch(function (err) {
            console.error(err);
          });
      }
    ]
  });
