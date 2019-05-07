'use strict';

angular.module('myApp.componentBasicsMod')

  .component('personalData', {
    templateUrl: './features/11-component-basics/components/personal-data.component.html',
    controller: [
      function () {
        var $ctrl = this;
        $ctrl.user = {
          name: 'Bruce Wayne',
          login: 'Batman!',
          email: 'bruce@wayne.inc'
        };
      }
    ]
  });
