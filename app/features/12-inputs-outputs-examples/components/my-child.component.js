'use strict';

angular.module('myApp.inputsOutputsMod')

  .component('myChild', {
    templateUrl: './features/12-inputs-outputs-examples/components/my-child.component.html',
    bindings: {
      'textMessage': '<',
      'messageSent': '&'
    },
    controller: [
      function () {
        var $ctrl = this;
        $ctrl.childText = '';
        $ctrl.sendMessage = function () {
          $ctrl.messageSent({ '$event': $ctrl.childText });
        };
      }
    ]
  });
