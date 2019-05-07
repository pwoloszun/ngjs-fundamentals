'use strict';

angular
  .module('myApp.core')

  .component('mainNavigation', {
    templateUrl: './core/main-navigation/main-navigation.html',
    controller: [
      '$mdSidenav',
      function ($mdSidenav) {
        this.linkItems = [
          { path: '#!/controller-basics', text: 'Controller Basics' },
          { path: '#!/component-basics', text: 'Component Basics' },
          { path: '#!/io-examples', text: 'Inputs Outputs examples' },
          { path: '#!/todos', text: 'Todos' },
          { path: '#!/heroes', text: 'Heroes' },
          { path: '#!/cities', text: 'Cities' },
          { path: '#!/real-estates', text: 'Real Estates' },
        ];

        this.toggleSideNav = function () {
          var id = 'mainNav';
          $mdSidenav(id).toggle();
        };
      }
    ]
  });
