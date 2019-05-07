'use strict';

angular.module('myApp.componentBasicsMod')

  .component('helloWorld', {
    templateUrl: './features/11-component-basics/components/hello-world.component.html',
    controller: [
      function () {
        var $ctrl = this;
        $ctrl.msg = 'hello batman!';
        $ctrl.person = {
          name: 'bob'
        };
      }
    ]
  });
