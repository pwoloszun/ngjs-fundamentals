'use strict';

angular.module('myApp.inputsOutputsMod')

  .component('myParent', {
    templateUrl: './features/12-inputs-outputs-examples/components/my-parent.component.html',
    controller: [
      function () {
        var $ctrl = this;
        $ctrl.parentMsg = '';
        $ctrl.logMessage = function (value) {
          console.log('parent received', value);
        };
      }
    ]
  });
