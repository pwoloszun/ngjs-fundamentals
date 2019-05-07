'use strict';

angular.module('myApp.inputsOutputsMod')

  .component('optionPicker', {
    templateUrl: './features/12-inputs-outputs-examples/components/option-picker.component.html',
    bindings: {
      label: '<',
      options: '<',
      optionSelect: '&'
    },
    controller: [
      function () {
        var $ctrl = this;

        $ctrl.handleChoose = function (option) {
          $ctrl.optionSelect({ $event: option });
        };
      }
    ]
  });
